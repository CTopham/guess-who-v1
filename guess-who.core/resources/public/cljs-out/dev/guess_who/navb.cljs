(ns guess-who.navb
  (:require

    )
  )

(defn index []
  [:div {:id "content"}
   [:h1 {:class "text-success"} "Hello Hiccup"]])

(defn navvy []
  [:div#main-content "this should be blue"]
  [:nav.navbar.navbar-light.bg-light
   [:a.navbar-brand {:href "#"} "Navbar"]
   ]
  )

