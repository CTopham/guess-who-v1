(ns guess-who.middleware
  (:require
    [ajax.core :refer [GET POST ajax-request json-response-format raw-response-format json-request-format]]
    [guess-who.person-generator :as pg]
    )
  )



;----- hardcoded-------

(defn get-comp-hc [comp]
  (let [comp (keyword comp)]
    (get pg/comp-checker comp)
    )
  )


;==========
;========== Below is Not in Use =====================
;==========
;------- client side api -----

(def state
  (atom { }))

(defn swapper [newstate]
         (swap!
           state
           assoc :info newstate)
         )


(defn handler [[ok response]]
  (let [
        attr (select-keys response [:era :hair-type :hair-color :instrument])
        ]
    (if ok
      (.log js/console (str response)))
    (.error js/console (str response))
    (swapper (str attr))
    )
  )


(defn getcompa [comp]
    (ajax-request
      {:uri (str "http://localhost:8080/composer/" comp)
       :method :get
       :handler handler
       :response-format (json-response-format {:keywords? true})})
  (get @state :info)
  )



