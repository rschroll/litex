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
            [lt.util.dom :refer [$ append]]
            [lt.util.js :refer [wait]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn start-browser [path]
  (cmd/exec! :add-litex-viewer-tab (str "file://" path)))

(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (object/merge! this {:output (str (:output @this) data)})))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (notifos/done-working)
                      ((:errfunc @this) (.toString data))))

(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this code]
                      (if (and (= code 0) (not (empty? (:commands @this))))
                        (object/raise this :run)
                        (do
                          (notifos/done-working)
                          ;; Be sure to get output:
                          (wait 100 #(object/raise this :done code))))))

(behavior ::done
          :triggers #{:done}
          :reaction (fn [this code]
                      ((:exitfunc @this) code (:output @this))))

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

(object/object* ::command-runner
                :triggers []
                :behaviors [::on-out ::on-error ::on-exit ::done ::run]
                :init (fn [this commands cwd exitfunc errfunc]
                        (object/merge! this {:commands commands
                                             :cwd cwd
                                             :exitfunc exitfunc
                                             :errfunc errfunc})
                        nil))

(defn run-commands [commands cwd exitfunc errfunc]
  (let [errfunc (or errfunc (fn [msg] (js/console.log (str "Process error: " msg))))
        exitfunc  (or exitfunc (fn [code output] (js/console.log (str "Process exited with code " code ":\n" output))))
        runner (object/create ::command-runner commands cwd exitfunc errfunc)]
    (notifos/working)
    (object/raise runner :run)))

(defn run-commands-to-client [connection-command editor commands]
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
        exitfunc (fn [code output]
                   (clients/send (eval/get-client! {:command connection-command
                                                    :origin editor
                                                    :info info})
                                 connection-command
                                 (assoc info :exit code
                                             :output output
                                             :imgdir imgdir
                                             :editor editor
                                             :pdfname pdfname)
                                 :only editor))]
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
    (run-commands (clojure.walk/prewalk-replace pathmap commands) (files/parent path) exitfunc nil)))


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
                        (run-commands-to-client :editor.eval.tex origin pdflatex-preview))))

(behavior ::sync-forward
          :triggers #{:sync-forward}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)]
                        (run-commands-to-client :litex.forward-sync editor
                                     [["synctex" "view" "-i" [(+ (:line pos) 1) ":" (+ (:ch pos) 1) ":" :filename]
                                       "-o" :basename]]))))

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