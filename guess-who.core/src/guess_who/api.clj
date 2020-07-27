(ns guess-who.api
  (:require
    [monger.core :as mg]
    [monger.collection :as mc]
    [clojure.data.json :as json]
    [clj-http.client :as client]
    )
  )

;Server side API

;connect and insert our data
(let [conn (mg/connect)
      db (mg/get-db conn "monger-test")
      coll "documents"]
  (mc/insert db coll {:name "beethoven" :era "classical" :born "18th century (1770)" :died "19th century (1827)"
                      :region "germany" :instrument "piano and violin" :hair-type "long"
                      :hair-color "gray" :gender "male" :height "5'4" :beard false :magnum-opus "9th symphony"
                      })
  (mc/insert db coll {:name "bach" :era "baroque" :born "17th century (1685)" :died "18th century (1750)"
                      :region "germany" :instrument "violin" :hair-type "curly"
                      :hair-color "gray" :gender "male" :height "5'11" :beard false :magnum-opus "mass in b minor"
                      })
  (mc/insert db coll {:name "brahms" :era "romantic" :born "19th century" :died "19th century"
                      :region "germany" :instrument "violin" :instrument2 "flute" :hair-type "straight"
                      :hair-color "gray" :gender "male" :height "5'10" :beard true :magnum-opus "symphony 4"
                      :hint "Schumann was so impressed with this gentleman, praising the young composer’s genius and heralding him as the one who could overthrow the New German School of Liszt and Wagner."
                      })
  )

;-----server side api------

;helper: our query: takes composer and key
(defn find-composer [comp]
  (let [conn (mg/connect)
        db (mg/get-db conn "monger-test")
        coll "documents"
        grab (mc/find-one-as-map db coll {:name comp})
        result (dissoc grab :_id)
        ]
    result
    ))

;were calling this from server, populates our /composer/:composer path with mongo data in son format, populates upon navigating to endpoint
(defn composer-api [comp]
  (json/write-str (find-composer comp)))



;==========
;========== Below is Not in Use =====================
;==========
;------- client side api -----

; http get call for "requests"
(defn get-comp [c k]
  (let [result-map (client/get (str "http://localhost:8080/composer/"c))
        result-body (get result-map :body)
        result-map (json/read-str result-body)
        ]
    (get result-map k)
    )
  )

;(get-comp "beethoven" "hair-type")

;------------------ adding to framework
;info (string/includes? s "what")

;(= info true) {:attribute "info" :full-input s}

;the user input has been identified wants some info, look for the possible answers and assoc it to the map
; (defmethod interpret "info" [m]
; (cond
;  (and (string/includes? (get m :full-input) "test") (string/includes? (get m :full-input) "me")) (assoc m :query {:comp "bach" :k "era"})
;  )
; )

;(contains? m :query) (#(str "info test! " %1 " " %2) (get-in m [:query :comp]) (get-in m [:query :k]))