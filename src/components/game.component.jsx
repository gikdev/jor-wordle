import { GuessInput, GuessList } from "@/components"
import { WORDS } from "@/data"
import { useGuessList } from "@/hooks"
import { sample } from "@/utils"

const answer = sample(WORDS)
console.log({ answer })

function Game() {
  const { guesses, addGuess } = useGuessList([])

  return (
    <>
      <GuessList answer={answer} guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  )
}

export default Game
