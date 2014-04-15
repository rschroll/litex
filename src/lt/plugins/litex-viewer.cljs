;; Copyright 2013 Kodowa Inc and 2014 Robert Schroll
;; This file is part of LiTeX ad is distributed under the terms of the GPLv3.
;; This file derives from src/lt/objs/browser.cljs in Light Table.

(ns lt.plugins.litex.viewer
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.clients :as clients]
            [lt.objs.editor.pool :as pool]
            [lt.objs.platform :as platform]
            [lt.util.dom :as dom])
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

(defui pdfimg [page viewer]
  [:img {:class page}]
  :click (fn [event]
           (object/raise viewer :image-click! event)))

(defn make-page [str viewer]
  (let [re (js/RegExp. "^Page *(\\d*) size: ([\\d\\.]*) x ([\\d\\.]*)")
        match (.exec re str)]
    (if match
      (let [page (js/parseInt (aget match 1))
            width (js/parseFloat (aget match 2))
            height (js/parseFloat (aget match 3))]
        [page {:page page :width width :height height :img (pdfimg page viewer) :zoom 0}]))))

(defn kwpairf [str]
  (let [[k v] (.split str ":")]
    (if v [(keyword k) (js/parseFloat v)] nil)))


(defn connect-client [this]
  (clients/handle-connection! {:name "PDF Viewer"
                               :frame this
                               :tags [:litex.client]
                               :behaviors [::tex-eval
                                           ::forward-sync
                                           ::handle-send!
                                           ::handle-close!]
                               :commands #{:editor.eval.tex
                                           :litex.forward-sync}
                               :type "LiTeX PDF Viewer"}))


(defn new-tabset []
  (let [ts (tabs/spawn-tabset)]
    (tabs/equalize-tabset-widths)
    ts))

(defn add []
  (let [viewer (object/create ::viewer)
        tabset (tabs/in-tab? (pool/last-active))
        viewerts (or (tabs/next-tabset tabset) (tabs/prev-tabset tabset) (new-tabset))]
    (tabs/add! viewer viewerts)
    (tabs/active! viewer)
    viewer))


;;*********************************************************
;; Object
;;*********************************************************

(object/object* ::viewer
                :name "PDF Viewer"
                :tags #{:viewer}
                :zoom 1
                :zoom-factor 1.25
                :restore-top nil
                :restore-left nil
                :sync-msg nil
                :laying-out false
                :rendering false
                :behaviors [::destroy-on-close
                            ::rem-client
                            ::layout-pdf
                            ::layout-done
                            ::render-pages
                            ::render-page
                            ::zoom-in!
                            ::zoom-out!
                            ::set-zoom!
                            ::show-log!
                            ::hide-log!
                            ::image-click!
                            ::mouse-wheel!
                            ::init!
                            ::set-client-name
                            ::focus-on-show]
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
                      (clients/rem! (:client @this))))

(behavior ::layout-pdf
          :triggers #{:set-pdf}
          :reaction (fn [this path]
                      (object/merge! this {:laying-out true})
                      (let [randstr (.toString (rand-int 1679616) 36)
                            filename (files/basename path)
                            basename (files/without-ext filename)
                            dirname (files/parent path)]
                        (object/raise this :set-name filename)
                        (object/merge! this {:pdfname path})
                        (lt.plugins.litex/run-commands [(str "pdfinfo -l -1 \"" basename ".pdf\"")]
                                                       dirname
                                                       (fn [error stdout stderr]
                                                         (object/raise this :structure-done error stdout stderr))))))

(behavior ::layout-done
          :triggers #{:structure-done}
          :reaction (fn [this error stdout stderr]
                      (if error (throw (str "pdfinfo error: " stderr)))
                      (let [pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                            sync-box   (dom/$ :div#sync-box   (object/->content this))
                            scroll-top (.-scrollTop pdf-viewer)
                            scroll-left (.-scrollLeft pdf-viewer)
                            pages (into {} (remove nil? (map #(make-page % this) (.split stdout "\n"))))]
                        (while (not (= sync-box (first (dom/children pdf-viewer))))
                          (dom/remove (first (dom/children pdf-viewer))))
                        (doseq [n (sort (keys pages))]
                          (dom/before sync-box (:img (pages n))))
                        (object/merge! this {:pages pages
                                             :restore-top scroll-top
                                             :restore-left scroll-left
                                             :laying-out false})
                        (object/raise this :set-zoom!)
                        ;; Usually this will trigger a scroll and a render, but sometimes not.  To be sure:
                        (object/raise this :render-start)
                        (when-let [sync-msg (:sync-msg @this)]
                          (object/raise (:client @this) :litex.forward-sync! sync-msg)
                          (object/merge! this {:sync-msg nil})))))

(behavior ::render-pages
          :triggers #{:render-start}
          :reaction (fn [this]
                      (if-not (:rendering @this)
                        (do
                          (object/merge! this {:rendering true})
                          (object/raise this :render-page)))))

(behavior ::render-page
          :triggers #{:render-page}
          :reaction (fn [this]
                      (let [pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                            viewtop (.-scrollTop pdf-viewer)
                            viewbottom (+ (.-clientHeight pdf-viewer) viewtop)
                            pages (:pages @this)
                            visible-pages (filter (fn [page]
                                                    (let [img (:img page)
                                                          imgtop (.-offsetTop img)
                                                          imgbottom (+ (.-offsetHeight img) imgtop)]
                                                      (and (>= imgbottom viewtop) (<= imgtop viewbottom))))
                                                  (vals pages))
                            zoom (:zoom @this)
                            render-page (first (filter #(< (:zoom %) zoom)
                                                       (lazy-cat visible-pages [(pages (+ (:page (last visible-pages)) 1))
                                                                                (pages (- (:page (first visible-pages)) 1))])))]
                       (if render-page
                          (let [render-page (assoc render-page :zoom zoom)
                                pagenum (:page render-page)]
                            (object/merge! this {:pages (assoc pages pagenum render-page)})
                            (lt.plugins.litex/run-commands [(str "pdftoppm -f " pagenum " -l " pagenum " -r " (* 72 zoom)
                                                                 " -png \"" (:pdfname @this) "\"")]
                                                           (files/parent (:pdfname @this))
                                                           (fn [error stdout stderr]
                                                             (if-not error
                                                               (set! (.-src (:img render-page))
                                                                     (str "data:image/png;base64," stdout))
                                                               (throw (str "pdftoppm error: " (js/window.atob stderr))))
                                                             (object/raise this :render-page))
                                                           :encoding "base64"))
                          (object/merge! this {:rendering false})))))

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
                        (doseq [p (vals (:pages @this))]
                          (dom/css (:img p) {:width (js/Math.ceil (* (:width p) new-zoom))
                                             :height (js/Math.ceil (* (:height p) new-zoom))
                                             :margin (str (* 20 new-zoom) "px auto")}))
                        ;; This will cause a scroll event, triggering rendering.
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
                      (if (or (.-ctrlKey event) (and (platform/mac?) (.-metaKey event)))
                        (let [zoom (:zoom @this)
                              clickX (- (/ (js/parseFloat (.-offsetX event)) zoom) 2)
                              clickY (- (/ (js/parseFloat (.-offsetY event)) zoom) 2)
                              pagenum (js/parseInt (-> event .-srcElement .-classList))
                              cwd (files/parent (:pdfname @this))
                              pdfname (files/basename (:pdfname @this))]
                          (object/raise lt.plugins.litex/tex-lang :sync-backward
                                        cwd pdfname pagenum clickX clickY)))))

(behavior ::mouse-wheel!
          :triggers #{:mouse-wheel!}
          :reaction (fn [this event]
                      (if (and (.-altKey event) (not (.-shiftKey event)) (not= (.-wheelDeltaY event) 0))
                        (do
                          (.preventDefault event)
                          (object/raise this (if (< (.-wheelDeltaY event) 0) :zoom-out! :zoom-in!))))))

(behavior ::init!
          :triggers #{:init}
          :reaction (fn [this]
                      (let [pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))]
                        (set! (.-onmousewheel pdf-viewer) (fn [event]
                                                            (object/raise this :mouse-wheel! event)))
                        (set! (.-onscroll pdf-viewer) (fn [event]
                                                        (object/raise this :render-start))))))

(behavior ::set-client-name
          :triggers #{:set-name}
          :reaction (fn [this title]
                      (object/merge! this {:name title})
                      (tabs/refresh! this)
                      (object/merge! (:client @this) {:name title})))

(behavior ::focus-on-show
          :triggers #{:show}
          :reaction (fn [this]
                      (object/raise this :focus!)))

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
                      (let [viewer (:frame @this)
                            pdfname (-> msg :data :pdfname)]
                        (if (not= pdfname (:pdfname @viewer))
                          (object/raise viewer :set-pdf pdfname))  ;; Starts rendering

                        (if (:laying-out @viewer)
                          (object/merge! viewer {:sync-msg msg})
                          (let [data (:data msg)
                                pdf-viewer (dom/$ :div#pdf-viewer (object/->content this))
                                sync-box (dom/$ :div#sync-box (object/->content this))
                                output-split (and (:stdout data) (rest (.split (:stdout data) "\nOutput")))
                                restore-top (:restore-top @viewer)
                                restore-left (:restore-left @viewer)]
                            (object/merge! viewer {:restore-top nil :restore-left nil})
                            (set! (.-offsetHeight pdf-viewer) (.-offsetHeight pdf-viewer))
                            (if output-split  ;; locs is lazy?
                              (let [zoom (:zoom @(:frame @this))
                                    locs (map #(pdf-to-elem pdf-viewer zoom
                                                            (into {} (remove nil? (map kwpairf (.split % "\n"))))) output-split)
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
                                       (and (>= bbleft vleft) (<= bbright vright)) vleft
                                       (<= bbwidth vwidth) (+ bbleft (/ (- bbwidth vwidth) 2))
                                       :else bbleft))
                                (set! (.-scrollTop pdf-viewer)
                                      (cond
                                       (and (>= bbtop vtop) (<= bbbottom vbottom)) vtop
                                       (<= bbheight vheight) (+ bbtop (/ (- bbheight vheight) 2))
                                       :else (* bbtop zoom)))
                                ;; This will cause a scroll event, which triggers rendering.

                                (dom/css sync-box {:left (str bbleft "px")
                                                   :top (str bbtop "px")
                                                   :width (str (- bbright bbleft) "px")
                                                   :height (str (- bbbottom bbtop) "px")})
                                (dom/add-class sync-box :animate))
                              (js/console.log "No synctex results!")))))))

(defn pdf-to-elem [elem zoom loc]
  (let [{:keys [h v W H Page]} loc
        img (nth (dom/children elem) (- Page 1))]
    (if (or (not img) (= (.-id img) "sync-box")) (throw (str "Error: could not find image for page " Page)))
    {:h (+ (* h zoom) (.-offsetLeft img) 2)  ;; 2 for border, since offset*
     :v (+ (* v zoom) (.-offsetTop img) 2)   ;; measures to outside of border
     :W (* W zoom)
     :H (* H zoom)}))

(cmd/command {:command :add-litex-viewer-tab
              :desc "LiTeX: Add PDF viewer for LaTeX document"
              :exec (fn [filename]
                      (let [b (add)]
                        (object/raise b :focus!)
                        (if filename
                          (object/raise b :set-pdf filename nil))))})
