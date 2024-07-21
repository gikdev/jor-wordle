const { useState, useCallback, useEffect } = require("react")

function useGuessList(initialValue = []) {
  const [guesses, setGuesses] = useState(initialValue)

  const addGuess = useCallback(
    newGuess => {
      if (!newGuess) return

      const guessesClone = [...guesses, newGuess]
      setGuesses(guessesClone)
    },
    [guesses],
  )

  useEffect(() => console.log(guesses), [guesses])

  return { guesses, addGuess }
}

export { useGuessList }
