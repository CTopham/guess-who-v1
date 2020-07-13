(ns guess-who.api
  (:require
    [monger.core :as mg]
    [monger.collection :as mc]
    )
  )


;connect and insert our data
(let [conn (mg/connect)
      db (mg/get-db conn "monger-test")
      coll "documents"]
  (mc/insert db coll {:composer "beethoven" :era "classical"})
  (mc/insert db coll {:composer "liszt" :era "romantic"})
  )

;our query: takes composer and key
(defmacro find-composer [comp k]
  (let [conn (mg/connect)
        db (mg/get-db conn "monger-test")
        coll "documents"
        grab (mc/find-one-as-map db coll {:composer comp})
        key (keyword k)
        result (get grab key)
        ]
    (println comp "created music in the" result "era")
    result
    ))
(find-composer "beethoven" "era")

;------------------ adding to framework
;info (string/includes? s "what")

;(= info true) {:attribute "info" :full-input s}

;the user input has been identified wants some info, look for the possible answers and assoc it to the map
; (defmethod interpret "info" [m]
; (cond
;  (and (string/includes? (get m :full-input) "test") (string/includes? (get m :full-input) "me")) (assoc m :query {:comp "bach" :k "era"})
;  )
; )

;(contains? m :query)
;(#(str "info test! " %1 " " %2) (get-in m [:query :comp]) (get-in m [:query :k]))