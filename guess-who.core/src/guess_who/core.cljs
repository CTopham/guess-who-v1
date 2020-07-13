(ns ^:figwheel-hooks guess-who.core
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [cljs.test :refer-macros [deftest is]]
    [guess-who.person-generator :as pg]
    [guess-who.keycoder :as kc]
    [guess-who.framework :as fw]
    ))

(defn new-board [n]
  (vec (repeat n (vec  (repeat n 0))))
  )

(def board-size 4)

;; This is the main app state method, this stores our header text, our SVG grid, and our target.
(defonce app-state
         (atom {:text "Guess Who"
                :board (new-board board-size)
                :target (pg/generate-target)                ;this is a map
                }))

;printing the target to console
(println (:target @app-state))

;Input state store our word arrays, anything we type into the text box get placed into the vector
(defonce input-state
         (atom {
                :word-array []
                }))

;This is where we swap our state for our question answers
(defonce output-state
         (atom {
                :answer "listening.."
                }))

;decode and get attribute key
;plug in attribute key to interpreter; get unique key back
;plug in unique key into response
;change :cmd to response
;clear word
(defn handle-input []
  (let [translated-word (kc/get-word (get-in @input-state [:word-array]))
        decoded-phrase-map (fw/decoder translated-word)
        interpret-map (fw/interpret decoded-phrase-map)
        response (fw/Dynamic-Answers interpret-map (:target @app-state))
        ]
    (prn translated-word)
    (swap! output-state assoc-in [:answer] response)               ;this should return our response method
    (swap! input-state assoc-in [:word-array] [])                  ;clearing the word array
    (prn "reset")                                                  ;printing reset
    (prn (get-in @input-state [:word-array]))                      ;should print an empty array
    )
  )

;This is our chat input box at the top of the page. this creates the html
;We collect all the keycodes the user is pressing and put them into a vector
;then when the user hits enter we call our handle input method
(defn chat-input []
  [:input {:type :textarea
           :value (kc/get-word (get-in @input-state [:word-array])) ;we could use this to erase input when we hit enter, but no backspace is in keycode
           :on-key-press (fn [e]
                           (swap! input-state update-in [:word-array] conj (.-charCode e)) ;append keycode pressed
                           (println "key press" (.-charCode e))
                           (if (= 13 (.-charCode e))       ;collect once we hit enter
                             (handle-input)                 ;clears our word array
                             ))}]
  )

(defn grid-html []
  (into
    [:svg
     {:view-box"0 0 4 2"
      :width 1000
      :height 600
      }
     (for [i (range(count(:board @app-state)))
           j (range(count(:board @app-state)))]
       [:rect {:width .66
               :height .89
               :fill (if (zero? (get-in @app-state [:board j i]))
                       "rgba(100,200,10,0.0"
                       "white")
               :x i
               :y j
               :on-click
               (fn box-click [e]
                 (prn :board j i)
                 (swap! app-state assoc-in [:board j i]))}])])
  )

(defn reset-button []
  [:div
   [:input {:type "button" :value "Reset"
            :on-click #(js/location.reload())}]])

;This is the core method that is building our grid
(defn guess-who []
  [:center
   (reset-button)
   [:h1 (:text @app-state)]
   (chat-input)
   [:h3 (:answer @output-state)]
   (grid-html)
   ]
  )


(defn get-app-element []
  (gdom/getElement "app")
  )

(defn mount [el]
  (reagent/render-component [guess-who] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
