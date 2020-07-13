(ns guess-who.info
  (:require
    [guess-who.info :as information]
    [compojure.core :refer [defroutes GET]]
    [compojure.route :as route]
    [hiccup.page :refer [html5 include-js include-css]]
    [clojure.string :as string :refer [split join]]
    [hiccup.core]
    ))

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

;our input box handler
(defn handle-input []
  (let [translated-word  (get-in @input-state [:word-array])
        response ("test")
        ]
    (prn translated-word)
    (swap! output-state assoc-in [:answer] response)               ;this should return our response method
    (swap! input-state assoc-in [:word-array] [])                  ;clearing the word array
    (prn "reset")                                                  ;printing reset
    (prn (get-in @input-state [:word-array]))                      ;should print an empty array
    )
  )

(defn chat-input []
  [:form {:action "/input"}
   [:label {:for "comp"}]
   [:input#comp {:type "text" :name "comp"}] [:br] [:br]]
  )


(defn info []
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     ]
    [:body
     [:div {:id "info"}]
     [:center
      [:h1 "Information Center"]
      (chat-input)
      [:h3 (:answer @output-state)]
      ]
     (include-js "/cljs-out/dev-main.js")]))

(defn beethoven []
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     ]
    [:body
     [:div {:id "info"}]
     [:center
      [:h1 "Beethoven"]
      (chat-input)
      [:h3 (:answer @output-state)]
      ]
     (include-js "/cljs-out/dev-main.js")]))