(ns guess-who.framework
  (:require
    [clojure.string :as string :refer [split join]]
    ))
;The frameworks job is to take the user input which has already been translated into readable
;language figure out what the user is really asking in the decode method, decode will return an attribute,
;we use that attribute and pass it into the interpreter to see if its true or not. The interpreter will send
;back a unique ID. We then plug that unique ID into the dynamic answer and send that out to the UI


;this returns the attribute from the key code map
(defn decoder [s]
  (let [
        brahms (string/includes? s "brahms")
        bach (string/includes? s "bach")
        beethoven (string/includes? s "beethoven")
        chopin (string/includes? s "chopin")
        debussy (string/includes? s "debussy")
        mozart (string/includes? s "mozart")
        liszt (string/includes? s "liszt")
        mendelssohn (string/includes? s "mendelssohn")

        era (or (string/includes? s "era") (string/includes? s "period"))
        born (or (string/includes? s "born") (string/includes? s "birth"))
        died (or (string/includes? s "died") (string/includes? s "die"))
        region (or (string/includes? s "from") (string/includes? s "region"))
        instrument (or (string/includes? s "play") (string/includes? s "instrument"))
        hair (string/includes? s "hair")
        height (or (string/includes? s "height") (string/includes? s "tall"))
        beard (string/includes? s "beard")
        magnum-opus (or (string/includes? s "compose") (string/includes? s "write"))
        hint (string/includes? s "hint")

        ]
    (cond
      (= brahms true) {:attribute "brahms" :full-input s}
      (= bach true) {:attribute "bach" :full-input s}
      (= beethoven true) {:attribute "beethoven" :full-input s}
      (= chopin true) {:attribute "chopin" :full-input s}
      (= debussy true) {:attribute "debussy" :full-input s}
      (= mozart true) {:attribute "mozart" :full-input s}
      (= liszt true) {:attribute "liszt" :full-input s}
      (= mendelssohn true) {:attribute "mendelssohn" :full-input s}

      (= era true) {:attribute "era" :full-input s}
      (= born true) {:attribute "born" :full-input s}
      (= died true) {:attribute "died" :full-input s}
      (= region true) {:attribute "region" :full-input s}
      (= instrument true) {:attribute "instrument" :full-input s}
      (= hair true) {:attribute "hair" :full-input s}
      (= height true) {:attribute "height" :full-input s}
      (= beard true) {:attribute "beard" :full-input s}
      (= magnum-opus true) {:attribute "magnum-opus" :full-input s}
      (= hint true) {:attribute "hint" :full-input s}
      :else {:attribute "unknown" :full-input s})
    )
  )

;--------------------------use the generated target as a parameter------------------------------------------
(defmulti interpret :attribute)

(defmethod interpret "era" [m]
  (cond
    (string/includes? (get m :full-input) "classical") (assoc m :era "classical")
    (string/includes? (get m :full-input) "baroque") (assoc m :era "baroque")
    (string/includes? (get m :full-input) "romantic") (assoc m :era "romantic")
    :else (assoc m :era "that")
    )
  )

(defmethod interpret "born" [m]
  (cond
    (or (string/includes? (get m :full-input) "1600s") (string/includes? (get m :full-input) "17th century")) (assoc m :born "17th century")
    (or (string/includes? (get m :full-input) "1700s") (string/includes? (get m :full-input) "18th century")) (assoc m :born "18th century")
    (or (string/includes? (get m :full-input) "1800s") (string/includes? (get m :full-input) "19th century")) (assoc m :born "19th century")
    (or (string/includes? (get m :full-input) "1900s") (string/includes? (get m :full-input) "20th century")) (assoc m :born "17th century")
    :else (assoc m :born "then")
    )
  )

(defmethod interpret "died" [m]
  (cond
    (or (string/includes? (get m :full-input) "1600s") (string/includes? (get m :full-input) "17th century")) (assoc m :died "17th century")
    (or (string/includes? (get m :full-input) "1700s") (string/includes? (get m :full-input) "18th century")) (assoc m :died "18th century")
    (or (string/includes? (get m :full-input) "1800s") (string/includes? (get m :full-input) "19th century")) (assoc m :died "19th century")
    (or (string/includes? (get m :full-input) "1900s") (string/includes? (get m :full-input) "20th century")) (assoc m :died "20th century")
    :else (assoc m :died "then")
    )
  )

(defmethod interpret "height" [m]
  (cond
    (or (string/includes? (get m :full-input) "5'1") (string/includes? (get m :full-input) "five one")) (assoc m :height "5'1")
    (or (string/includes? (get m :full-input) "5'2") (string/includes? (get m :full-input) "five two")) (assoc m :height "5'2")
    (or (string/includes? (get m :full-input) "5'3") (string/includes? (get m :full-input) "five three")) (assoc m :height "5'3")
    (or (string/includes? (get m :full-input) "5'4") (string/includes? (get m :full-input) "five four")) (assoc m :height "5'4")
    (or (string/includes? (get m :full-input) "5'5") (string/includes? (get m :full-input) "five five")) (assoc m :height "5'5")
    (or (string/includes? (get m :full-input) "5'6") (string/includes? (get m :full-input) "five six")) (assoc m :height "5'6")
    (or (string/includes? (get m :full-input) "5'7") (string/includes? (get m :full-input) "five seven")) (assoc m :height "5'7")
    (or (string/includes? (get m :full-input) "5'8") (string/includes? (get m :full-input) "five eight")) (assoc m :height "5'8")
    (or (string/includes? (get m :full-input) "5'9") (string/includes? (get m :full-input) "five nine")) (assoc m :height "5'9")
    (or (string/includes? (get m :full-input) "5'10") (string/includes? (get m :full-input) "five ten")) (assoc m :height "5'10")
    (or (string/includes? (get m :full-input) "5'11") (string/includes? (get m :full-input) "five eleven")) (assoc m :height "5'11")
    (or (string/includes? (get m :full-input) "6'0") (string/includes? (get m :full-input) "six foot")) (assoc m :height "6'0")
    (or (string/includes? (get m :full-input) "6'1") (string/includes? (get m :full-input) "six one")) (assoc m :height "6'1")
    (or (string/includes? (get m :full-input) "6'2") (string/includes? (get m :full-input) "six two")) (assoc m :height "6'2")
    :else (assoc m :height "that")
    )
  )

;the user input has been identified has a region question, look for the possible answers and assoc it to the map
(defmethod interpret "region" [m]
  (cond
    (string/includes? (get m :full-input) "united state") (assoc m :region "united states")
    (string/includes? (get m :full-input) "usa") (assoc m :region "united states")
    (string/includes? (get m :full-input) "poland") (assoc m :region "poland")
    (string/includes? (get m :full-input) "vienna") (assoc m :region "vienna")
    (string/includes? (get m :full-input) "austria") (assoc m :region "austria")
    (string/includes? (get m :full-input) "hungary") (assoc m :region "hungary")
    (string/includes? (get m :full-input) "germany") (assoc m :region "germany")
    (string/includes? (get m :full-input) "france") (assoc m :region "france")
    (string/includes? (get m :full-input) "germany") (assoc m :region "germany")
    (string/includes? (get m :full-input) "china") (assoc m :region "china")
    (string/includes? (get m :full-input) "england") (assoc m :region "england")
    (string/includes? (get m :full-input) "russia") (assoc m :region "russia")
    :else (assoc m :region "there")
    )
  )

(defmethod interpret "instrument" [m]
  (cond
    (string/includes? (get m :full-input) "piano") (assoc m :instrument "piano")
    (string/includes? (get m :full-input) "violin") (assoc m :instrument "violin")
    (string/includes? (get m :full-input) "harpsichord") (assoc m :instrument "harpsichord")
    (string/includes? (get m :full-input) "flute") (assoc m :instrument "flute")
    (string/includes? (get m :full-input) "cello") (assoc m :instrument "cello")
    (string/includes? (get m :full-input) "bass") (assoc m :instrument "bass")
    (string/includes? (get m :full-input) "trumpet") (assoc m :instrument "trumpet")
    (string/includes? (get m :full-input) "trombone") (assoc m :instrument "trombone")
    :else (assoc m :instrument "that")
    )
  )

(defmethod interpret "hair" [m]
  (cond
    (string/includes? (get m :full-input) "brown") (assoc m :hair-color "brown")
    (string/includes? (get m :full-input) "gray") (assoc m :hair-color "gray")
    (string/includes? (get m :full-input) "grey") (assoc m :hair-color "gray")
    (string/includes? (get m :full-input) "red") (assoc m :hair-color "red")
    (string/includes? (get m :full-input) "blonde") (assoc m :hair-color "blonde")
    (string/includes? (get m :full-input) "black") (assoc m :hair-color "black")
    (string/includes? (get m :full-input) "bald") (assoc m :hair-color "bald")
    (string/includes? (get m :full-input) "short") (assoc m :hair-type "short")
    (string/includes? (get m :full-input) "long") (assoc m :hair-type "long")
    (string/includes? (get m :full-input) "curly") (assoc m :hair-type "curly")
    (string/includes? (get m :full-input) "straight") (assoc m :hair-type "straight")
    :else (assoc m :hair-type "that type")
    )
  )

(defmethod interpret "magnum-opus" [m]
  (cond
    (string/includes? (get m :full-input) "mass in b minor") (assoc m :magnum-opus "mass in b minor")
    (string/includes? (get m :full-input) "9th symphony") (assoc m :magnum-opus "9th symphony")
    (string/includes? (get m :full-input) "symphony 4") (assoc m :magnum-opuscolor "symphony 4")
    (string/includes? (get m :full-input) "4th ballad") (assoc m :magnum-opus "4th ballad")
    (string/includes? (get m :full-input) "claire de lune") (assoc m :magnum-opus "claire de lune")
    (string/includes? (get m :full-input) "requim") (assoc m :magnum-opus "requim")
    (string/includes? (get m :full-input) "la campanella") (assoc m :magnum-opus "la campanella")
    (string/includes? (get m :full-input) "violin concerto 64") (assoc m :magnum-opus "violin concerto 64")
    :else (assoc m :magnum-opus "mass in b minor | 9th symphony | symphony 4 | 4th ballad | claire de lune | requim | la campanella | violin concerto 64")
    )
  )

(defmethod interpret "beard" [m]
  (cond
    (string/includes? (get m :full-input) "beard") (assoc m :beard true)
    )
  )

;the user input has been identified wants a hint, look for the possible answers and assoc it to the map
(defmethod interpret "hint" [m]
  (cond
    (string/includes? (get m :full-input) "hint") (assoc m :hint "hint")
    )
  )


;----------------------------------these solve the riddle----------------------------------


(defmethod interpret "brahms" [m]
  (cond
    (string/includes? (get m :full-input) "brahms") (assoc m :solve "brahms")
    )
  )
(defmethod interpret "bach" [m]
  (cond
    (string/includes? (get m :full-input) "bach") (assoc m :solve "bach")
    )
  )
(defmethod interpret "beethoven" [m]
  (cond
    (string/includes? (get m :full-input) "beethoven") (assoc m :solve "beethoven")
    )
  )
(defmethod interpret "chopin" [m]
  (cond
    (string/includes? (get m :full-input) "chopin") (assoc m :solve "chopin")
    )
  )
(defmethod interpret "debussy" [m]
  (cond
    (string/includes? (get m :full-input) "debussy") (assoc m :solve "debussy")
    )
  )
(defmethod interpret "mozart" [m]
  (cond
    (string/includes? (get m :full-input) "mozart") (assoc m :solve "mozart")
    )
  )
(defmethod interpret "liszt" [m]
  (cond
    (string/includes? (get m :full-input) "liszt") (assoc m :solve "liszt")
    )
  )
(defmethod interpret "mendelssohn" [m]
  (cond
    (string/includes? (get m :full-input) "mendelssohn") (assoc m :solve "mendelssohn")
    )
  )
;----------------------------------unknown commands----------------------------------
(defmethod interpret "unknown" [m]
  (assoc m :unknown "Unknown command")
  )
;----------------------------------dynamic answer----------------------------------
;Takes the interpreted map and the target map
;checks to see if the user guess the correct person
;checks to see if the question the user ask is right or wrong
;always returns a text response that we set as our
(defn Dynamic-Answers [m targ]
  (if (string/includes? (get m :full-input) (get targ :name))
    (#(str "Yes! You guessed it! the person is " %1) (get targ :name))
    (cond
      (contains? m :hair-type) (if (#(= (get m :hair-type) %) (get targ :hair-type))
                                 (#(str "Yes! the persons hair is " %1) (get targ :hair-type))
                                 (#(str "No, the persons hair is NOT " %1) (get m :hair-type)))

      (contains? m :height) (if (#(= (get m :height) %) (get targ :height))
                              (#(str "Yes! the persons is " %1 " feet tall") (get targ :height))
                              (#(str "No, the persons is NOT " %1 " feet tall") (get m :height)))

      (contains? m :hair-color) (if (#(= (get m :hair-color) %) (get targ :hair-color))
                                  (#(str "Yes! the persons hair is " %1) (get targ :hair-color))
                                  (#(str "No, the persons hair is NOT " %1) (get m :hair-color)))

      (contains? m :region) (if (#(= (get m :region) %) (get targ :region))
                              (#(str "Yes! the persons is from " %1) (get targ :region))
                              (#(str "No, the persons is NOT from " %1) (get m :region)))


      (contains? m :era) (if (#(= (get m :era) %) (get targ :era))
                           (#(str "Yes! the persons composed in the " %1 " period") (get targ :era))
                           (#(str "No, the persons is did not compose in the " %1 " period") (get m :era)))

      (contains? m :born) (if (#(= (get m :born) %) (get targ :born))
                            (#(str "Yes! the persons was born in the " %1) (get targ :born))
                            (#(str "No, the persons is was not born in the " %1 ) (get m :born)))

      (contains? m :died) (if (#(= (get m :died) %) (get targ :died))
                            (#(str "Yes! the persons died in the " %1) (get targ :died))
                            (#(str "No, the persons did not die in the " %1 ) (get m :died)))

      (contains? m :instrument) (if (#(= (get m :instrument) %) (get targ :instrument))
                                  (#(str "Yes! the persons plays the " %1) (get targ :instrument))
                                  (#(str "No, the persons does not play " %1 ) (get m :instrument)))

      (contains? m :beard) (if (#(= (get m :beard) %) (get targ :beard))
                             (str "Yes! the persons has a beard " )
                             (str "No, the persons does NOT have a beard"))

      (contains? m :magnum-opus) (if (#(= (get m :magnum-opus) %) (get targ :magnum-opus))
                                   (#(str "Yes! " %1 " is one of this composers most prolific pieces") (get targ :magnum-opus))
                                   (#(str "No, try " %1 " for another composer" ) (get m :magnum-opus)))


      (contains? m :hint) (#(str %1) (get targ :hint))

      (contains? m :solve) (if (#(= (get m :solve) %) (get targ :name))
                             (#(str "Yes! the persons is " %1) (get targ :name))
                             (#(str "No, the persons is NOT " %1) (get m :solve)))

      (contains? m :unknown) (str "Unknown command")
      )
    )
  )
