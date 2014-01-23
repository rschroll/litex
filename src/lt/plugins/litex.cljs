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
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def _exec (.-exec (js/require "child_process")))
(defn exec [command cwd exitfunc]
  (_exec command (js-obj "cwd" cwd
                         "env" (proc/merge-env nil)
                         "windowsVerbatimArguments" (when (= js/process.platform "win32") true))
         exitfunc))

(defn kwpair [str]
  (let [[k v] (.split str ":")]
    (if v [(keyword k) v] nil)))

(defn run-commands [commands cwd exitfunc & {:keys [accout] :or {accout ""}}]
  (if (empty? commands)
    (exitfunc nil accout "")
    (let [command (first commands)
          commands (rest commands)]
      (exec command cwd (fn [error stdout stderr]
                          (let [stdout (str accout stdout)]
                            (if error
                              (exitfunc error stdout stderr)
                              (run-commands commands cwd exitfunc :accout stdout))))))))

(defn run-commands-to-client [connection-command editor commands render?]
  (let [info (-> @editor :info)
        path (-> @editor :info :path)
        pathmap (fn [s]
                  (clojure/string.replace s #"%[fpbder%]"
                                          #((keyword %1) {:%f (files/basename path)
                                                          :%p path
                                                          :%b (files/without-ext (files/basename path))
                                                          :%d (files/parent path)
                                                          :%e (files/ext path)})))
        imgdir (str (pathmap "%d") "/.img." (pathmap "%f"))
        pdfname (str (files/join (pathmap "%d") (pathmap "%b")) ".pdf")
        exitfunc (fn [error stdout stderr]
                   (clients/send (eval/get-client! {:command connection-command
                                                    :origin editor
                                                    :info info})
                                 connection-command
                                 (assoc info :error error
                                             :stdout stdout
                                             :stderr stderr
                                             :editor editor
                                             :pdfname pdfname)
                                 :only editor))]
    (eval/get-client! {:command connection-command
                       :origin editor
                       :create (fn [] (cmd/exec! :add-litex-viewer-tab (if render? pdfname nil)))
                       :info info})
    ;; Note that when client is created, we get a placeholder back instead.  Therefore,
    ;; we can't store this value.  Instead, we get the client again when we next need it.
    (run-commands (map pathmap commands) (files/parent path) exitfunc)))

(def pdflatex-commands ["pdflatex -halt-on-error --synctex=1 \"%f\""])
(def dvilatex-commands ["latex -halt-on-error --synctex=1 \"%f\""
                        "dvipdf \"%b\""])

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
                        (run-commands-to-client :editor.eval.tex origin pdflatex-commands false))))

(behavior ::sync-forward
          :triggers #{:sync-forward}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)]
                        (run-commands-to-client :litex.forward-sync editor
                                     [(str "synctex view -i \"" (+ (:line pos) 1) ":" (+ (:ch pos) 1) ":%f\" -o \"%b\"")]
                                     true))))

(behavior ::sync-backward
          :triggers #{:sync-backward}
          :reaction (fn [this cwd pdfname pagenum clickX clickY]
                      (run-commands [(str"synctex edit -o \"" pagenum ":" clickX ":" clickY ":" pdfname "\"")]
                                    cwd
                                    (fn [error stdout stderr]
                                      (if-not error
                                        (let [loc (into {} (remove nil? (map kwpair (.split stdout "\n"))))
                                              filename (files/join cwd (:Input loc))
                                              line (- (:Line loc) 1)
                                              column (- (:Column loc) 1)]
                                          (cmd/exec! :open-path filename)
                                          (if-let [edit (first (pool/by-path filename))]
                                            (do
                                              (ed/move-cursor edit {:line line :ch (max column 0)})
                                              (ed/center-cursor edit))
                                            (js/console.log (str "LiTeX could not find editor with " filename)))))))))

(object/object* ::tex-lang
                :tags #{:tex.lang}
                :behaviors [::eval! ::sync-backward]
                :triggers #{:eval! :sync-backward})

(def tex-lang (object/create ::tex-lang))

(cmd/command {:command :litex-forward-sync
              :desc "LiTeX: Forward sync from LaTeX to PDF"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :sync-forward)))})