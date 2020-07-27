(ns guess-who.symspell)

; not using quiet yet

(def remove-char
  (memoize
    (fn [w idx]
      (str (subs w 0 idx)
           (subs w (inc idx) (count w))))))

(def delete-words
  (memoize
    (fn[w n]
      (cond
        (= n 0)
        []

        (= n 1)
        (pmap #(remove-char w %) (range 0 (count w)))

        :default
        (concat (delete-words w 1)
                (->> (delete-words w 1)
                     (pmap #(delete-words % (dec n)))
                     flatten))))))


(defn spelling-suggestions
  [words n]
  (group-by first
            (concat
              (map #(list % %) words)
              (mapcat #(map (fn [w] [w %]) (delete-words % n)) words))))

(def spell-check
  (memoize
    (fn [m n w]
      (->> (delete-words w n)
           (map #(get m %))
           (filter not-empty)
           (apply concat)
           (map second)
           distinct))))

(defn spell-checker [words n]
  (fn [w] (spell-check (spelling-suggestions words n) n w)))
