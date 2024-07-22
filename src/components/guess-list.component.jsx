import { Guess } from "@/components"
import { NUM_OF_GUESSES_ALLOWED } from "@/constants"
import { range } from "@/utils"

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(i => (
        <Guess key={i} answer={answer} value={guesses?.[i]} />
      ))}
    </div>
  )
}

export default GuessList
