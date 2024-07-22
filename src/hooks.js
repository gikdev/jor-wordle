const { useState, useCallback, useEffect } = require("react")

function useGuessList(initialValue = []) {
  const [guesses, setGuesses] = useState(initialValue)

  useEffect(() => console.log(guesses), [guesses])

  const addGuess = useCallback(
    newGuess => {
      if (!newGuess) return

      const guessesClone = [...guesses, newGuess]
      setGuesses(guessesClone)
    },
    [guesses],
  )

  return { guesses, addGuess, setGuesses }
}

function useBanner() {
  const THEMES = { DEFAULT: "", HAPPY: "happy", SAD: "sad" }

  const [theme, setTheme] = useState(THEMES.DEFAULT)
  const [isOpen, setIsOpen] = useState(false)

  return { theme, setTheme, isOpen, setIsOpen, THEMES }
}

export { useGuessList, useBanner }
