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

(defn ensure-absolute [path dir]
  (if (files/absolute? path)
    path
    (files/join dir path)))

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

(defn get-config-from-settings [editor which]
  (let [path (-> @editor :info :path)
        settings (get-settings which (files/parent path))
        filename (files/basename (or (get settings "filename") path))
        cwd (if (settings "directory")
              (ensure-absolute (settings "directory") (files/parent path))
              (files/parent path))
        commands (or (COMMANDS (settings "commands")) (settings "commands"))

        pathmap (fn [s]
                  (clojure/string.replace s #"%[fpbde%]"
                                          #((keyword %1) {:%f filename
                                                          :%p (files/join cwd filename)
                                                          :%b (files/without-ext filename)
                                                          :%d cwd
                                                          :%e (files/ext filename)
                                                          :%% "%"})))
        pdfname (if (settings "outputname")
                  (ensure-absolute (pathmap (settings "outputname")) cwd)
                  (-> @editor :pdfname))]
    {:commands (map pathmap commands) :cwd cwd :pdfname pdfname}))

(defn run-commands-to-client [connection-command editor commands cwd pdfname render?]
  (let [info (:info @editor)
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
    (object/merge! editor {:pdfname pdfname})
    (run-commands commands cwd exitfunc)))

(defn load-settings [path]
  (let [file (files/open-sync path)]
    (js->clj (js/JSON.parse (:content file)))))

(defn get-settings [which cwd]
  (apply merge (map #(get % which) [DEFAULT_SETTINGS
                                    (load-settings (files/home (files/join ".config" "litexrc")))
                                    (load-settings (files/join cwd ".litexrc"))])))

(def DEFAULT_SETTINGS
  {"file" {"filename" nil "directory" nil "commands" "pdflatex" "outputname" "%b.pdf"}
   "project" {"filename" nil "directory" nil "commands" "pdflatex" "outputname" "%b.pdf"}})

(def COMMANDS
  {"pdflatex" ["pdflatex -halt-on-error --synctex=1 \"%f\""]
   "latex-dvipdf" ["latex -halt-on-error --synctex=1 \"%f\"" "dvipdf \"%b\""]
   "latex-dvips-ps2pdf" ["latex -halt-on-error --synctex=1 \"%f\"" "dvips \"%b\"" "ps2pdf \"%b.ps\""]})


(behavior ::on-eval
          :triggers #{:eval}
          :reaction (fn [editor]
                      (object/raise editor :save)
                      (object/raise tex-lang :eval! "project" editor)))

(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (object/raise editor :save)
                      (object/raise tex-lang :eval! "file" editor)))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this which editor]
                      (let [{:keys [commands cwd pdfname]} (get-config-from-settings editor which)]
                        (run-commands-to-client :editor.eval.tex editor commands cwd pdfname false))))

(behavior ::sync-forward
          :triggers #{:sync-forward}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)
                            filename (files/basename (-> @editor :info :path))
                            pdfname (some #(let [name (:pdfname (%))]
                                             (if (files/exists? name) name nil))
                                          ;; This silliness is to avoid running get-config-from-settings
                                          ;; if we don't need the result.
                                          [(fn [] @editor)
                                           #(get-config-from-settings editor "file")
                                           #(get-config-from-settings editor "project")])]
                        (if pdfname
                          (run-commands-to-client :litex.forward-sync editor
                                                  [(str "synctex view -i \"" (+ (:line pos) 1) ":" (+ (:ch pos) 1) ":"
                                                        filename "\" -o \"" (files/basename pdfname) "\"")]
                                                  (files/parent pdfname) pdfname true)
                          (js/console.log "Don't know the name of the PDF file this compiles to.  (Try compiling.)")))))

(behavior ::sync-backward
          :triggers #{:sync-backward}
          :reaction (fn [this cwd pdfname pagenum clickX clickY]
                      (run-commands [(str"synctex edit -o \"" pagenum ":" clickX ":" clickY ":" pdfname "\"")]
                                    cwd
                                    (fn [error stdout stderr]
                                      (if-not error
                                        (let [loc (into {} (remove nil? (map kwpair (.split stdout "\n"))))
                                              filename (#(if (files/absolute? %) % (files/join cwd %)) (:Input loc))
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
