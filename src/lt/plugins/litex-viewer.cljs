;; Copyright 2013 Kodowa INc and 2014 Robert Schroll
;; This file is part of LiTeX ad is distributed under the terms of the GPLv3.
;; This file derives from src/lt/objs/browser.cljs in Light Table.

(ns lt.plugins.litex.viewer
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.console :as console]
            [lt.objs.files :as files]
            [lt.objs.clients :as clients]
            [lt.objs.context :as ctx]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [crate.core :as crate]
            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def utils (js-obj))
(set! js/lttools utils)

(defn add-util [nme fn]
  (aset utils (name nme) fn))

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

(defui pdfimg [viewer src]
  [:img {:src src}]
  :click (fn [event]
           (object/raise viewer :image-click! event))
  :load (fn [evemt]
          (object/raise viewer :image-load! event)))

(defn kwpairf [str]
  (let [[k v] (.split str ":")]
    (if v [(keyword k) (js/parseFloat v)] nil)))

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
                :sync-msg nil
                :rendering false
                :loading-count 0
                :behaviors [::destroy-on-close
                            ::rem-client
                            ::render-pdf
                            ::render-done
                            ::zoom-in!
                            ::zoom-out!
                            ::set-zoom!
                            ::show-log!
                            ::hide-log!
                            ::image-click!
                            ::image-load!
                            ::init!
                            ::set-client-name
                            ::set-active
                            ::active-context
                            ::focus-on-show
                            ::inactive-context]
                :init (fn [this]
                        (object/merge! this {:client (connect-client this)})
                        [:div#litex-viewer.cm-s-default.hide-log
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

(behavior ::render-pdf
          :triggers #{:set-pdf}
          :reaction (fn [this path]
                      (object/merge! this {:rendering true})
                      (let [randstr (.toString (rand-int 1679616) 36)
                            filename (files/basename path)
                            basename (files/without-ext filename)
                            dirname (files/parent path)
                            imgdir (files/join dirname (str ".img." filename))]
                        (if (files/exists? imgdir)
                          (files/delete! imgdir))
                        (files/mkdir imgdir)
                        (object/raise this :set-name filename)
                        (object/merge! this {:pdfname path})
                        (lt.plugins.litex/run-commands [(str "pdftoppm -png \"" basename ".pdf\" \".img." filename "/" randstr "\"")]
                                                       dirname
                                                       (fn [error stdout stderr]
                                                         (object/raise this :render-done error stdout stderr imgdir))))))

(behavior ::render-done
          :triggers #{:render-done}
          :reaction (fn [this error stdout stderr imgdir]
                      (let [pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                            sync-box   (dom/$ :div#sync-box   (object/->content this))
                            scroll-top (.-scrollTop pdf-viewer)
                            scroll-left (.-scrollLeft pdf-viewer)]
                        (while (not (= sync-box (first (dom/children pdf-viewer))))
                          (dom/remove (first (dom/children pdf-viewer))))
                        (doseq [f (files/ls imgdir)]
                          (dom/before sync-box (pdfimg this (str "file://" (files/join imgdir f)))))
                        (object/raise this :set-zoom!)
                        (object/merge! this {:restore-top scroll-top
                                             :restore-left scroll-left
                                             :loading-count (- (count (dom/children pdf-viewer)) 1)}))))

(behavior ::image-load!
          :triggers #{:image-load!}
          :reaction (fn [this event]
                      (let [count (- (:loading-count @this) 1)]
                        (object/merge! this {:loading-count count})
                        (if (= count 0)
                          (do
                            (object/merge! this {:rendering false})
                            (when-let [sync-msg (:sync-msg @this)]
                              (object/raise (:client @this) :litex.forward-sync! sync-msg)
                              (object/merge! this {:sync-msg nil})))))))

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

(behavior ::image-click!
          :triggers #{:image-click!}
          :reaction (fn [this event]
                      (if (.-ctrlKey event)
                        (let [zoom (:zoom @this)
                              scale (/ 150 72)
                              clickX (/ (- (/ (js/parseFloat (.-offsetX event)) zoom) 2) scale)
                              clickY (/ (- (/ (js/parseFloat (.-offsetY event)) zoom) 2) scale)
                              pagenum (js/parseInt (last (.split (-> event .-srcElement .-src) "-")))
                              cwd (files/parent (:pdfname @this))
                              pdfname (files/basename (:pdfname @this))]
                          (object/raise lt.plugins.litex/tex-lang :sync-backward
                                        cwd pdfname pagenum clickX clickY)))))

(behavior ::init!
                  :triggers #{:init}
                  :reaction (fn [this]
                              nil))

(behavior ::set-client-name
          :triggers #{:set-name}
          :reaction (fn [this title]
                      (object/merge! this {:name title})
                      (tabs/refresh! this)
                      (object/merge! (:client @this) {:name loc})))

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
                                    log-viewer (dom/$ :pre#log-viewer (object/->content this))
                                    viewer (:frame @this)]
                                (if-not (:error data)
                                  (do
                                    (object/raise viewer :set-pdf (:pdfname data))
                                    (object/raise (:editor data) :sync-forward)
                                    (object/raise viewer :hide-log!))
                                  (object/raise viewer :show-log!))
                                (set! (.-innerText log-viewer) (str (:stdout data) (:stderr data)))
                                (set! (.-scrollTop log-viewer) (- (.-scrollHeight log-viewer) (.-clientHeight log-viewer))))))

(behavior ::forward-sync
          :triggers #{:litex.forward-sync!}
          :reaction (fn [this msg]
                      (if (:rendering @(:frame @this))
                        (object/merge! (:frame @this) {:sync-msg msg})
                        (let [data (:data msg)
                              pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                              sync-box (dom/$ :div#sync-box (object/->content this))
                              output-split (and (:stdout data) (rest (.split (:stdout data) "\nOutput")))
                              restore-top (:restore-top @(:frame @this))
                              restore-left (:restore-left @(:frame @this))]
                          (object/merge! (:frame @this) {:restore-top nil :restore-left nil})
                          (set! (.-offsetHeight pdf-viewer) (.-offsetHeight pdf-viewer))
                          (if output-split  ;; locs is lazy?
                            (let [locs (map #(pdf-to-elem pdf-viewer (into {} (remove nil? (map kwpairf (.split % "\n"))))) output-split)
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
                            (js/console.log "No synctex results!"))))))

(defn pdf-to-elem [elem loc]
  (let [{:keys [h v W H Page]} loc
        img (nth (dom/children elem) (- Page 1))
        scale (/ 150 72)]
    {:h (+ (* h scale) (.-offsetLeft img) 2)  ;; 2 for border, since offset*
     :v (+ (* v scale) (.-offsetTop img) 2)   ;; measures to outside of border
     :W (* W scale)
     :H (* H scale)}))

(cmd/command {:command :add-litex-viewer-tab
              :desc "LiTeX: Add PDF viewer for LaTeX document"
              :exec (fn [filename]
                      (let [b (add)]
                        (object/raise b :focus!)
                        (if filename
                          (object/raise b :set-pdf filename nil))))})
