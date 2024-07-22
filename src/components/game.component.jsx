import { Banner, GuessInput, GuessList } from "@/components"
import { NUM_OF_GUESSES_ALLOWED } from "@/constants"
import { WORDS } from "@/data"
import { useBanner, useGuessList } from "@/hooks"
import { sample } from "@/utils"
import { useEffect, useRef, useState } from "react"

const randomWord = sample(WORDS)

function Game() {
  const answerRef = useRef(randomWord)
  const [isEnded, setIsEnded] = useState(false)
  const { guesses, addGuess, setGuesses } = useGuessList([])
  const { theme, isOpen, setIsOpen, setTheme, THEMES } = useBanner()
  console.log({ answer: answerRef.current })

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    let winningStatus = null

    for (const guess of guesses) {
      const isCorrect = guess === answerRef.current
      const hasChances = guesses.length < NUM_OF_GUESSES_ALLOWED

      if (isCorrect) winningStatus = "won"
      if (hasChances) continue
      winningStatus = isCorrect ? "won" : "lost"
    }

    switch (winningStatus) {
      case "won":
        setTheme(THEMES.HAPPY)
        setIsOpen(true)
        setIsEnded(true)
        break
      case "lost":
        setTheme(THEMES.SAD)
        setIsOpen(true)
        setIsEnded(true)
        break
      default:
        setTheme(THEMES.DEFAULT)
        setIsOpen(false)
        setIsEnded(false)
    }
  }, [guesses])

  function restart() {
    setGuesses([])
    setIsEnded(false)
    setIsOpen(false)
    setTheme(THEMES.DEFAULT)
    answerRef.current = sample(WORDS)
  }

  return (
    <>
      <GuessList answer={answerRef.current} guesses={guesses} />
      {isEnded && (
        <button onClick={restart} type="button" className="btn btn--reset">
          Restart Game
        </button>
      )}
      <GuessInput addGuess={addGuess} enabled={!isEnded} />
      {isOpen && <Banner answer={answerRef.current} guessesLength={guesses.length} theme={theme} />}
    </>
  )
}

export default Game
