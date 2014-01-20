(ns lt.plugins.litex.viewer
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.console :as console]
            [lt.objs.files :as files]
            [lt.objs.eval :as eval]
            [lt.objs.clients :as clients]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.menu :as menu]
            [lt.objs.platform :as platform]
            [lt.objs.context :as ctx]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.notifos :as notifos]
            [lt.objs.clients.devtools :as devtools]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [crate.core :as crate]
            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def utils (js-obj))
(set! js/lttools utils)

(def no-history-sites #{"data:text/html,chromewebdata"})

(defn check-http [url]
  (if (and (= (.indexOf url "http") -1)
           (= (.indexOf url "file://") -1))
    (str "http://" url)
    url))

(defn add-util [nme fn]
  (aset utils (name nme) fn))

(defui url-bar [this]
  [:input.url-bar {:type "text" :placeholder "url" :value (bound this :urlvalue)}]
  :focus (fn []
           (ctx/in! :browser.url-bar this)
           (object/raise this :active))
  :blur (fn []
          (object/raise this :inactive)
          (ctx/out! :browser.url-bar)))

(defui backward [this]
  [:button {:value "<"} "<"]
  :click (fn []
           (object/raise this :back!)))

(defui forward [this]
  [:button {:value ">"} ">"]
  :click (fn []
           (object/raise this :forward!)))

(defui refresh [this]
  [:button {:value "re"} "↺"]
  :click (fn []
           (object/raise this :refresh!)))

(defui iframe [this]
  [:iframe {:src (bound (subatom this :url)) :id (browser-id this) :nwfaketop "true" :nwdisable "true"}]
  :focus (fn []
           (object/raise this :active))
  :blur (fn []
          (object/raise this :inactive)))

(defui zoom-in [this]
  [:button {:value "zoom-in"} "⊕"]
  :click (fn []
           (object/raise this :zoom-in!)))

(defui zoom-out [this]
  [:button {:value "zoom-out"} "⊖"]
  :click (fn []
           (object/raise this :zoom-out!)))

(defui show-log [this]
  [:button {:value "show-log"} "Show logs"]
  :click (fn []
           (object/raise this :show-log!)))

(defui hide-log [this]
  [:button {:value "hide-log"} "Hide logs"]
  :click (fn []
           (object/raise this :hide-log!)))

(defn browser-id [this]
  (str "browser" (object/->id this)))

(defn to-frame [this]
  (let [id (if (string? this)
             this
             (browser-id this))]
    (aget js/window.frames id)))

(defn handle-cb [cbid command data]
  (object/raise clients/clients :message [cbid command data]))


(defn connect-client [this]
  (clients/handle-connection! {:name (:urlvalue @this)
                               :frame this
                               :frame-id (browser-id this)
                               :tags [:zframe.client]
                               :behaviors [::tex-eval
                                           ::forward-sync
                                           ::handle-send!
                                           ::handle-close!]
                               :commands #{:editor.eval.tex
                                           :litex.forward-sync}
                               :type :frame}))


(defn add []
  (let [browser (object/create ::browser)]
    (tabs/add! browser)
    (tabs/active! browser)
    browser))


;;*********************************************************
;; Object
;;*********************************************************

(object/object* ::browser
                :name "browser"
                :tags #{:viewer}
                :history []
                :history-pos -1
                :url "about:blank"
                :urlvalue "about:blank"
                :zoom 1
                :zoom-factor 1.25
                :restore-top nil
                :restore-left nil
                :behaviors [::destroy-on-close
                            ::rem-client
                            ::zoom-in!
                            ::zoom-out!
                            ::set-zoom!
                            ::show-log!
                            ::hide-log!
                            ::window-load-click-handler
                            ::window-load-handler
                            ::window-load-lttools
                            ::init!
                            ::set-client-name
                            ::set-active
                            ::active-context
                            ::focus-on-show
                            ::inactive-context]
                :init (fn [this]
                        (object/merge! this {:client (connect-client this)})
                        [:div#litex-viewer.cm-s-default
                         [:style {:type "text/css"} "
                          #litex-viewer {
                          position: relative;
                          }
                          #pdf-viewer-container {
                          position: absolute;
                          top: 0;
                          width: 100%;
                          height: 70%;
                          overflow: hidden;
                          }
                          #litex-viewer.hide-log #pdf-viewer-container {
                          height: 100%;
                          }
                          #pdf-viewer {
                          position: absolute;
                          top: 0;
                          bottom: 2em;
                          width: 100%;
                          overflow: scroll;
                          }
                          #litex-viewer nav {
                          position: absolute;
                          bottom: 0;
                          height: 2em;
                          width: 100%
                          }
                          #litex-viewer nav button[value='show-log'] {
                          display: none;
                          }
                          #litex-viewer.hide-log nav button[value='show-log'] {
                          display: inline;
                          float: right;
                          }
                          #litex-viewer nav button[value='hide-log'] {
                          display: inline;
                          float: right;
                          }
                          #litex-viewer.hide-log nav button[value='hide-log'] {
                          display: none;
                          }
                          #pdf-viewer img {
                          display: block;
                          margin: 20px;
                          border: 2px solid black;
                          }
                          #log-viewer {
                          position: absolute;
                          bottom: 0;
                          width: 100%;
                          height: 30%;
                          overflow: scroll;
                          font-family: monospace;
                          }
                          #litex-viewer.hide-log #log-viewer {
                          visibility: hidden;
                          }
                          #sync-box {
                          position: absolute;
                          border: 3px solid blue;
                          opacity: 1;
                          }
                          #sync-box.animate {
                          transition-property: opacity;
                          transition-duration: 5s;
                          opacity: 0;
                          }
                          "]  ;; visibility hidden so we can still scroll to bottom
                         [:div#pdf-viewer-container
                          [:div#pdf-viewer
                           [:div#sync-box.animate]]
                          [:nav
                           (zoom-in this)
                           (zoom-out this)
                           (show-log this)
                           (hide-log this)]]
                         [:pre#log-viewer]
                        ]))

;;*********************************************************
;; Behaviors
;;*********************************************************

(behavior ::destroy-on-close
                  :triggers #{:close}
                  :reaction (fn [this]
                              (object/raise this :inactive)
                              (object/destroy! this)))

(behavior ::rem-client
                  :triggers #{:destroy}
                  :reaction (fn [this]
                              (when (= (ctx/->obj :global.browser) this)
                                (ctx/out! :global.browser))
                              (when-let [b (first (remove #{this} (object/by-tag :browser)))]
                                (ctx/in! :global.browser b))
                              (clients/rem! (:client @this))))

(behavior ::zoom-in!
          :triggers #{:zoom-in!}
          :reaction (fn [this]
                      (let [zoom (:zoom @this)
                            factor (:zoom-factor @this)]
                        (object/raise this :set-zoom! (* zoom factor)))))

(behavior ::zoom-out!
          :triggers #{:zoom-out!}
          :reaction (fn [this]
                      (let [zoom (:zoom @this)
                            factor (:zoom-factor @this)]
                        (object/raise this :set-zoom! (/ zoom factor)))))

(behavior ::set-zoom!
          :triggers #{:set-zoom!}
          :reaction (fn [this nzoom]
                      (let [zoom (:zoom @this)
                            pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                            [x y] (center-point pdf-viewer)
                            new-zoom (or nzoom zoom)]
                        (object/merge! this {:zoom new-zoom})
                        (doseq [elem (dom/children pdf-viewer)]
                          (dom/css elem {:zoom new-zoom}))
                        (set-center-point pdf-viewer (map #(* % (/ new-zoom zoom)) [x y])))))

(defn center-point [elem]
  [(+ (.-scrollLeft elem) (/ (.-clientWidth elem) 2))
   (+ (.-scrollTop elem) (/ (.-clientHeight elem) 2))])

(defn set-center-point [elem [x y]]
  (set! (.-scrollLeft elem) (- x (/ (.-clientWidth elem) 2)))
  (set! (.-scrollTop elem) (- y (/ (.-clientHeight elem) 2))))

(behavior ::show-log!
          :triggers #{:show-log!}
          :reaction (fn [this]
                      (dom/remove-class (object/->content this) "hide-log")))

(behavior ::hide-log!
          :triggers #{:hide-log!}
          :reaction (fn [this]
                      (dom/add-class (object/->content this) "hide-log")))

(behavior ::window-load-click-handler
                  :triggers #{:window.loaded}
                  :reaction (fn [this window loc]
                              (.document.addEventListener window "blur"
                                                          (fn [e]
                                                            (object/raise this :inactive e)))
                              (.document.addEventListener window "contextmenu"
                                                          (fn [e]
                                                            (object/raise this :menu! e)))
                              (.document.addEventListener window "click"
                                                          (fn [e]
                                                            (object/raise this :active)
                                                            (when (and
                                                                   (= (.-target.nodeName e) "A")
                                                                   (or (and (platform/mac?) (.-metaKey e))
                                                                       (.-ctrlKey e)))
                                                              (.preventDefault e)
                                                              (.stopPropagation e)
                                                              (cmd/exec! :add-browser-tab (.-target.href e))))
                                                          )))

(behavior ::window-load-key-handler
                  :triggers #{:window.loaded}
                  :reaction (fn [this window loc]
                              (let [script (.document.createElement window "script")]
                                (set! (.-type script) "text/javascript")
                                (set! (.-innerHTML script) (:content (files/open-sync "core/node_modules/lighttable/util/keyevents.js")))
                                (.document.head.appendChild window script)
                                (aset (aget window "Mousetrap") "handleKey"
                                      (fn [key char e]
                                        (when (keyboard/capture key char e)
                                          (dom/prevent e)
                                          (dom/stop-propagation e))))
                                )))

(behavior ::window-load-lttools
                  :triggers #{:window.loaded}
                  :reaction (fn [this window loc]
                              (set! (.-lttools window) utils)))

(behavior ::init!
                  :triggers #{:init}
                  :reaction (fn [this]
                              nil))
;;                               (let [frame (dom/$ :iframe (object/->content this))
;;                                     bar (dom/$ :input (object/->content this))]
;;                                 (set! (.-onload frame) (fn []
;;                                                          (let [loc (.-contentWindow.location.href frame)]
;;                                                            (object/raise this :window.loaded (.-contentWindow frame) loc)
;;                                                            (set! (.-contentWindow.onhashchange frame) (fn []
;;                                                                                                         (dom/val bar (.-contentWindow.location.href frame))))
;;                                                            (devtools/clear-scripts!)
;;                                                            (dom/val bar loc)
;;                                                            (object/raise this :navigate loc)))))))

(behavior ::set-client-name
                  :triggers #{:navigate}
                  :reaction (fn [this loc]
                              (let [title (.-document.title (to-frame this))
                                    title (if-not (empty? title)
                                            title
                                            "browser")]
                                (object/merge! this {:name title})
                                (tabs/refresh! this)
                                (dotimes [x (:loading-counter @this)]
                                  (notifos/done-working))
                                (object/merge! (:client @this) {:name loc}))))

(behavior ::set-active
                  :triggers #{:active :show}
                  :reaction (fn [this]
                              (ctx/in! :global.browser this)))

(behavior ::active-context
                  :triggers #{:active :show}
                  :reaction (fn [this]
                              (ctx/in! :browser this)))

(behavior ::focus-on-show
                  :triggers #{:show}
                  :reaction (fn [this]
                              (object/raise this :focus!)))

(behavior ::inactive-context
                  :triggers #{:inactive}
                  :reaction (fn [this]
                              (ctx/out! :browser)))

(behavior ::handle-send!
                  :triggers #{:send!}
                  :reaction (fn [this msg]
                              (object/raise this (keyword (str (:command msg) "!")) msg)
                              ))

(behavior ::handle-close!
                  :triggers #{:client.close!}
                  :reaction (fn [this]
                              (object/raise (:frame @this) :close)
                              (clients/rem! this)))

(behavior ::tex-eval
                  :triggers #{:editor.eval.tex!}
                  :reaction (fn [this msg]
                              (let [data (:data msg)
                                    imgdir (:imgdir data)
                                    pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                                    sync-box   (dom/$ :div#sync-box   (object/->content this))
                                    log-viewer (dom/$ :pre#log-viewer (object/->content this))
                                    scroll-top (.-scrollTop pdf-viewer)
                                    scroll-left (.-scrollLeft pdf-viewer)]
                                (if (= 0 (:exit data))
                                  (do
                                    (while (not (= sync-box (first (dom/children pdf-viewer))))
                                      (dom/remove (first (dom/children pdf-viewer))))
                                    (doseq [f (files/ls imgdir)]
                                      (dom/before sync-box (crate/html [:img {:src (str "file://" (files/join imgdir f))}])))
                                    (object/raise (:frame @this) :set-zoom!)
                                    (object/merge! (:frame @this) {:restore-top scroll-top :restore-left scroll-left})
                                    (object/raise (:frame @this) :hide-log!)
                                    (object/raise (:editor data) :sync-forward))
                                  (object/raise (:frame @this) :show-log!))
                                (set! (.-innerText log-viewer) (:output data))
                                (set! (.-scrollTop log-viewer) (- (.-scrollHeight log-viewer) (.-clientHeight log-viewer))))))

(behavior ::forward-sync
          :triggers #{:litex.forward-sync!}
          :reaction (fn [this msg]
                      (let [data (:data msg)
                            pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                            sync-box (dom/$ :div#sync-box (object/->content this))
                            output-split (and (:output data) (rest (.split (:output data) "\nOutput")))
                            restore-top (:restore-top @(:frame @this))
                            restore-left (:restore-left @(:frame @this))]
                        (object/merge! (:frame @this) {:restore-top nil :restore-left nil})
                        (if output-split  ;; locs is lazy?
                          (let [locs (map #(pdf-to-elem pdf-viewer (into {} (remove nil? (map kwpair (.split % "\n"))))) output-split)
                                zoom (:zoom @(:frame @this))
                                ;; Need to find bounding box including all boxes in locs
                                bbleft (apply min (map :h locs))
                                bbtop (apply min (map #(- (:v %) (:H %)) locs))
                                bbright (apply max (map #(+ (:h %) (:W %)) locs))
                                bbbottom (apply max (map :v locs))
                                bbwidth (- bbright bbleft)
                                bbheight (- bbbottom bbtop)
                                vleft (or restore-left (.-scrollLeft pdf-viewer))
                                vwidth (.-clientWidth pdf-viewer)
                                vright (+ vleft vwidth)
                                vtop (or restore-top (.-scrollTop pdf-viewer))
                                vheight (.-clientHeight pdf-viewer)
                                vbottom (+ vtop vheight)]
                            (dom/remove-class sync-box :animate)
                            ;; Positioning algorithm:
                            ;; The x and y coordinates are treated separately.  For each,
                            ;;  - If the node is already within the view, do not change the view.
                            ;;  - Else, if the node can fit in the view, center it.
                            ;;  - Else, align the node with the top/left of the view.
                            ;; There is no need for bounds checking, since the viewer will not scroll
                            ;; outside of its bounds.
                            (set! (.-scrollLeft pdf-viewer)
                                  (cond
                                   (and (>= (* bbleft zoom) vleft) (<= (* bbright zoom) vright)) vleft
                                   (<= (* bbwidth zoom) vwidth) (+ (* bbleft zoom) (/ (- (* bbwidth zoom) vwidth) 2))
                                   :else (* bbleft zoom)))
                            (set! (.-scrollTop pdf-viewer)
                                  (cond
                                   (and (>= (* bbtop zoom) vtop) (<= (* bbbottom zoom) vbottom)) vtop
                                   (<= (* bbheight zoom) vheight) (+ (* bbtop zoom) (/ (- (* bbheight zoom) vheight) 2))
                                   :else (* bbtop zoom)))

                            (dom/css sync-box {:left (str bbleft "px")
                                               :top (str bbtop "px")
                                               :width (str (- bbright bbleft) "px")
                                               :height (str (- bbbottom bbtop) "px")})
                            (dom/add-class sync-box :animate))
                                               ;:-webkit-animation-play-state "running"}))
                          (js/console.log "No synctex results!")))))

(defn pdf-to-elem [elem loc]
  (let [{:keys [h v W H Page]} loc
        img (nth (dom/children elem) (- Page 1))
        scale (/ 150 72)]
    {:h (+ (* h scale) (.-offsetLeft img) 2)  ;; 2 for border, since offset*
     :v (+ (* v scale) (.-offsetTop img) 2)   ;; measures to outside of border
     :W (* W scale)
     :H (* H scale)}))

(defn kwpair [str]
  (let [[k v] (.split str ":")]
    (if v [(keyword k) (js/parseFloat v)] nil)))

(cmd/command {:command :add-litex-viewer-tab
              :desc "LiTeX: add viewer tab"
              :exec (fn [loc]
                      (let [b (add)]
                        (if-not loc
                          (object/raise b :focus!)
                          (object/raise b :navigate! loc))))})

(defn start-viewer [loc]
  (let [b (add)]
    (if-not loc
      (object/raise b :focus!)
      (object/raise b :navigate! loc))
    b))
