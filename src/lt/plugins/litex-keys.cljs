;; Copyright 2014 Robert Schroll
;; This file is part of LiTeX and is distributed under the terms of the GPLv3.

(ns lt.plugins.litex.keys
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.keyboard :as keyboard]
            [lt.plugins.auto-paren :as ap])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::double-quote
          :triggers #{:double-quote}
          :reaction (fn [editor]
                      (ed/operation editor
                                    (fn []
                                      (let [current-selection (ed/selection editor)]
                                        (if-not (= current-selection "")
                                          (ed/replace-selection editor (str "``" current-selection "''"))
                                          (let [prev-char (ap/get-char editor -1)]
                                            (cond
                                             (= prev-char "\\") (ed/insert-at-cursor editor "\"")
                                             (re-seq ap/word-char prev-char) (ed/insert-at-cursor editor "''")
                                             :else (ed/insert-at-cursor editor "``")))))))))

(def delim "(?:\\\\[Bb]igg?|\\\\|")
(def pre-delim (js/RegExp. (str delim "\\\\left)?$")))
(defn post-delim [ch]
  (js/RegExp. (str "^" delim "\\\\right)?\\" ch)))

(behavior ::open-delim
          :triggers #{:open-delim}
          :reaction (fn [editor ch]
                      (ed/operation editor
                                    (fn []
                                      (let [current-selection (ed/selection editor)]
                                        (if-not (= current-selection "")
                                          (ed/replace-selection editor (str ch current-selection (ap/pairs ch)))
                                          (if (re-seq ap/word-char (ap/get-char editor 1))
                                            (ed/insert-at-cursor editor ch)
                                            (let [pre-mod (re-find pre-delim (ap/get-char editor -10))
                                                  post-mod (str (if (= pre-mod "\\left") "\\right" pre-mod) (ap/pairs ch))]
                                              (ed/insert-at-cursor editor (str ch post-mod))
                                              (ap/move-cursor editor (- (.-length post-mod)))))))))))

(behavior ::close-delim
          :triggers #{:close-delim}
          :reaction (fn [editor ch]
                      (let [post-mod (re-find (post-delim ch) (ap/get-char editor 10))]
                        (if post-mod
                          (ap/move-cursor editor (.-length post-mod))
                          (keyboard/passthrough)))))

(cmd/command {:command :litex-double-quote
              :hidden true
              :desc "LiTeX: Handle double quote character"
              :exec (fn [c]
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :double-quote)))})

(cmd/command {:command :litex-open-delim
              :hidden true
              :desc "LiTeX: Handle open delimiter"
              :exec (fn [c]
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :open-delim c)))})

(cmd/command {:command :litex-close-delim
              :hidden true
              :desc "LiTeX: Handle close delimiter"
              :exec (fn [c]
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :close-delim c)))})
