(ns guess-who.person-generator)

;The person generator generates the target
(def people
  {
   :brahms {:name "brahms" :era "romantic" :born "19th century" :died "19th century"
            :region "germany" :instrument "violin" :instrument2 "flute" :hair-type "straight"
            :hair-color "gray" :gender "male" :height "5'10" :beard true :magnum-opus "symphony 4"
            :hint "Schumann was so impressed with this gentleman, praising the young composer’s genius and heralding him as the one who could overthrow the New German School of Liszt and Wagner."
            }
   :bach {:name "bach" :era "baroque" :born "17th century (1685)" :died "18th century (1750)"
          :region "germany" :instrument "violin" :hair-type "curly"
          :hair-color "gray" :gender "male" :height "5'11" :beard false :magnum-opus "mass in b minor"
          :hint "This prolific composer is widely known as one of the greatest of all time. This composer tragically lost both his parent when he was just 10 years old do to bad waste disposal"
          }
   :beethoven {:name "beethoven" :era "classical" :born "18th century (1770)" :died "19th century (1827)"
               :region "germany" :instrument "piano and violin" :hair-type "long"
               :hair-color "gray" :gender "male" :height "5'4" :beard false :magnum-opus "9th symphony"
               :hint "This composer famously lost his hearing in his latter years. According to the composer the hearing had went after a fall due to a fit of rage caused by  being interrupted"
               }
   :chopin {:name "chopin" :era "romantic" :born "19th century (1810)" :died "19th century (1849)"
            :region "poland" :instrument "piano" :hair-type "long"
            :hair-color "brown" :gender "male" :height "5'7" :beard false :magnum-opus "4th ballad"
            :hint "This Composer played the piano in the dark throughout his entire life. He would always put out the candles in the room, and even when playing at an event or party, he would ask to extinguish the light in the room."
            }
   :debussy {:name "debussy" :era "romantic" :born "19th century (1862)" :died "20th century (1918)"
             :region "france" :instrument "piano" :hair-type "mid length"
             :hair-color "brown" :gender "male" :height "5'9" :beard true :magnum-opus "claire de lune"
             :hint "Aged ten, this composer started his studies at the Paris Conservatoire, but failed to win the premier prix for piano, so abandoned his dream of becoming a virtuoso."
             }
   :mozart {:name "mozart" :era "classical" :born "18th century (1756)" :died "18th century (1791)"
            :region "vienna" :instrument "piano and violin" :hair-type "long"
            :hair-color "gray" :gender "male" :height "5'4" :beard false :magnum-opus "requim"
            :hint "This composers Clarinet Concerto in A Major features in films including ‘The King’s Speech’, '27 Dresses' and 'Out of Africa'."
            }
   :liszt {:name "liszt" :era "romantic" :born "19th century (1811)" :died "19th century (1886)"
           :region "hungary" :instrument "piano" :hair-type "long"
           :hair-color "brown" :gender "male" :height "6'1" :beard false :magnum-opus "la campanella"
           :hint "Despite being the most famous performer of his day, this person was not so known for his composing . However the Hungarian was pretty prolific, producing 400 original compositions and 900 transcriptions for piano in his lifetime."
           }
   :mendelssohn {:name "mendelssohn" :era "romantic" :born "19th century (1809)" :died "19th century (1847)"
                 :region "germany" :instrument "organ" :hair-type "curly"
                 :hair-color "brown" :gender "male" :height "5'6" :beard false :magnum-opus "violin concerto, op. 64"
                 :hint "Queen Victoria described this composer as 'the greatest musical genius since Mozart' and 'the most amiable man."
                 }
   }
  )

;Gets a random person from the map and returns another map with their info
(defn generate-target []
  (let [target (rand-nth (map conj (keys people)))          ;gets a key from map of people
        target-info (get people target)                     ;gets the info for the random target
        ]
    target-info                                            ;return map of targets info
    ))
