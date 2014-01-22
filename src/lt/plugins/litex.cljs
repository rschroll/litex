;; Copyright 2013 Kodowa INc and 2014 Robert Schroll
;; This file is part of LiTeX ad is distributed under the terms of the GPLv3.
;; This file derives from the HTML for Light Table plugin.

(ns lt.plugins.litex
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.clients :as clients]
            [lt.objs.files :as files]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :refer [$ append]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn start-browser [path]
  (cmd/exec! :add-litex-viewer-tab (str "file://" path)))

(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        ;(js/console.log out)
                        (object/merge! this
                                       {:output (str (:output @this) out)}))))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (notifos/done-working)
                      (let [out (.toString data)]
                        (js/console.log (str "Proc error: " out)))))

(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (if (and (= data 0) (not (empty? (:commands @this))))
                        (object/raise this :run)
                        (do
                          (notifos/done-working)
                          (clients/send (eval/get-client! {:command (:connection-command @this)
                                                           :origin (:editor @this)
                                                           :info (:info @this)})
                                        (:connection-command @this)
                                        (assoc (:info @this) :exit data
                                                             :output (:output @this)
                                                             :imgdir (:imgdir @this)
                                                             :editor (:editor @this)
                                                             :pdfname (:pdfname @this))
                                        :only (:editor @this))))))

(behavior ::run
          :triggers #{:run}
          :reaction (fn [this]
                      (let [command (first (:commands @this))
                            commands (rest (:commands @this))]
                        (object/merge! this {:commands commands})
                        (proc/exec {:command (apply str (first command))
                                    :args (map #(apply str %) (rest command))
                                    :cwd (:cwd @this)
                                    :obj this}))))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-out ::on-error ::on-exit ::run]
                :init (fn [this editor info commands connection-command cwd imgdir pdfname]
                        (object/merge! this {:editor editor
                                             :info info
                                             :commands commands
                                             :connection-command connection-command
                                             :cwd cwd
                                             :imgdir imgdir
                                             :pdfname pdfname})
                        nil))

(defn run-command [connection-command editor commands]
  (let [info (-> @editor :info)
        path (-> @editor :info :path)
        pathmap {:filename (files/basename path)
                 :fullname path
                 :basename (files/without-ext (files/basename path))
                 :dirname  (files/parent path)
                 :ext      (files/ext path)
                 :randstr  (.toString (rand-int 1679616) 36)}
        imgdir (str (:dirname pathmap) "/.img." (:filename pathmap))
        pdfname (str (files/join (:dirname pathmap) (:basename pathmap)) ".pdf")
        obj (object/create ::connecting-notifier editor info
                                                 (clojure.walk/prewalk-replace pathmap commands)
                                                 connection-command
                                                 (files/parent path)
                                                 imgdir pdfname)]
    (eval/get-client! {:command connection-command
                       :origin editor
                       :create (fn [] (start-browser path))
                       :info info})
    ;; Note that when client is created, we get a placeholder back instead.  Therefore,
    ;; we can't store this value.  Instead, we get the client again when we next need it.
    (if (= connection-command :editor.eval.tex)
      (do
        (if (files/exists? imgdir)
          (files/delete! imgdir))
        (files/mkdir imgdir)))
    (notifos/working "TeXing...")
    (object/raise obj :run)))

(def pdflatex-commands [["pdflatex" "-halt-on-error" "--synctex=1" :filename]])
(def dvilatex-commands [["latex" "-halt-on-error" "--synctex=1" :filename]
                        ["dvipdf" :basename]])
(def pdflatex-preview (conj pdflatex-commands
                            ["pdftoppm" "-png" [:basename ".pdf"] [".img." :filename "/" :randstr]]))

(behavior ::on-eval
          :triggers #{:eval
                      :eval.one}
          :reaction (fn [editor]
                      (object/raise editor :save)))

(behavior ::eval-on-save
          :triggers #{:save}
          :reaction (fn [editor]
                      (object/raise tex-lang :eval! {:origin editor :info (-> @editor :info)})))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (run-command :editor.eval.tex origin pdflatex-preview))))

(behavior ::sync-forward
          :triggers #{:sync-forward}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)]
                        (run-command :litex.forward-sync editor
                                     [["synctex" "view" "-i" [(+ (:line pos) 1) ":" (+ (:ch pos) 1) ":" :filename]
                                       "-o" :basename] ["sleep" "0.1s"]]))))  ;; extra command to ensure we catch output

(object/object* ::tex-lang
                :tags #{:tex.lang}
                :behaviors [::eval!]
                :triggers #{:eval!})

(def tex-lang (object/create ::tex-lang))

(cmd/command {:command :litex-forward-sync
              :desc "LiTeX: Forward sync from LaTeX to PDF"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :sync-forward)))})