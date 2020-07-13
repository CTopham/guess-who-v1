(ns guess-who.server
  (:require
    [guess-who.info :as info]
    [compojure.core :refer [defroutes GET]]
    [compojure.route :as route]
    [hiccup.page :refer [html5 include-js include-css]]
    ))


(defroutes handler
           (GET "/info" [] (info/info))
           (GET "/beethoven" [] (info/beethoven))
           (route/not-found "<h1>Page not found</h1>"))
