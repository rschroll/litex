;; Copyright 2014 Robert Schroll
;; This file is part of LiTeX and is distributed under the terms of the GPLv3.

(ns lt.plugins.litex.keys
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
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

(cmd/command {:command :litex-double-quote
              :hidden true
              :desc "LiTeX: Handle double quote character"
              :exec (fn [c]
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :double-quote)))})
