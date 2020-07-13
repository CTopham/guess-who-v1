(ns guess-who.info
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs.test :refer-macros [deftest is]]
    [guess-who.person-generator :as pg]
    [guess-who.keycoder :as kc]
    [guess-who.framework :as fw]
    ))



;This is the core method that is building our grid
(defn info []
  "Did it work"
  [:center
   [:h1 (:text "success")]
   ]
  )

(defn get-info-element []
  (gdom/getElement "info"))

(defn mount [el]
  (reagent/render-component [info] el))

(defn mount-app-element []
  (when-let [el (get-info-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)