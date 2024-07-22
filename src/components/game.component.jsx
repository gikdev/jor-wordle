import { Banner, GuessInput, GuessList } from "@/components"
import { NUM_OF_GUESSES_ALLOWED } from "@/constants"
import { WORDS } from "@/data"
import { useBanner, useGuessList } from "@/hooks"
import { sample } from "@/utils"
import { useEffect, useState } from "react"

const answer = sample(WORDS)
console.log({ answer })

function Game() {
  const [isEnded, setIsEnded] = useState(false)
  const { guesses, addGuess } = useGuessList([])
  const { theme, isOpen, setIsOpen, setTheme, THEMES } = useBanner()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    let winningStatus = null

    for (const guess of guesses) {
      const isCorrect = guess === answer
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

  return (
    <>
      <GuessList answer={answer} guesses={guesses} />
      <GuessInput addGuess={addGuess} enabled={!isEnded} />
      {isOpen && <Banner answer={answer} guessesLength={guesses.length} theme={theme} />}
    </>
  )
}

export default Game
