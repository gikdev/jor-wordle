import { range } from "@/utils"
import { NUM_OF_GUESSES_ALLOWED } from "@/constants"
import { Guess } from "@/components"

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(i => (
        <Guess key={i} guess={guesses?.[i]} />
      ))}
    </div>
  )
}

export default GuessList
