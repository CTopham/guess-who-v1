(ns guess-who.keycoder
  (:require [clojure.string :as string :refer [split join]]
            ))

;The keycodes namespace is used to decipher keycodes that we collect
; during the user input and translate that into actual words. the
; key-mapper is a hashmap that shows the key value pair of keycodes.
;the get-words uses map and a for loop due to multiple letters appearing twice in some
;input. get-words will translate what the input into a string.

(def key-mapper
  {
   :39 "'"
   :113 "q"
   :119	"w"
   :101	"e"
   :114	"r"
   :116	"t"
   :121	"y"
   :117	"u"
   :105	"i"
   :111	"o"
   :112	"p"
   :97	"a"
   :115	"s"
   :100	"d"
   :102	"f"
   :103	"g"
   :104	"h"
   :106	"j"
   :107	"k"
   :108	"l"
   :122	"z"
   :120	"x"
   :99	"c"
   :118	"v"
   :98	"b"
   :110	"n"
   :109	"m"
   :32 " "
   :13 ""
   ;UPPERCASE
   :81 "q"
   :87 "w"
   :69 "e"
   :82 "r"
   :84 "t"
   :89 "y"
   :85 "u"
   :73 "i"
   :79 "o"
   :80 "p"
   :65 "a"
   :83 "s"
   :68 "d"
   :70 "f"
   :71 "g"
   :72 "h"
   :74 "j"
   :75 "k"
   :76 "l"
   :90 "z"
   :88 "x"
   :67 "c"
   :86 "v"
   :66 "b"
   :78 "n"
   :77 "m"
   :48 "0"
   :49 "1"
   :50 "2"
   :51 "3"
   :52 "4"
   :53 "5"
   :54 "6"
   :55 "7"
   :56 "8"
   :57 "9"
   }
  )

;translates the the word array we get from user input into an actual word
(defn get-word [coll]
  (let [kws (map #(keyword (str %))coll)                    ;convert ints to keywords for map lookup
        letters (for [x kws :let [y (get key-mapper x)]] y) ;loop through the user input and return the letter
        ]
    (string/join letters)                                   ;join the string and return it to the caller
    )
  )
