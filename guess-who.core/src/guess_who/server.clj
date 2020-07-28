(ns guess-who.server
  (:require
    [guess-who.info :as info]
    [guess-who.api :as api]
    [compojure.core :refer [defroutes GET]]
    [compojure.route :as route]
    [hiccup.page :refer [html5 include-js include-css]]
    ))


(defroutes handler

           (GET "/info" [] (info/info))

           (GET "/composer/:name" [name] (api/composer-api name))

           (GET "/comp/:comp" [comp key]
             (str "The comp is " comp " the key is " key))

           (route/not-found "<h1>Page not found</h1>"))

;http://localhost:8080/comp/beethoven?key=era