import { checkGuess } from "@/helpers"
import { range } from "@/utils"

function Guess({ value, answer }) {
  const checkedValues = checkGuess(value, answer)

  return (
    <p className="guess">
      {range(5).map(i => (
        <span key={i} className={`cell ${checkedValues?.[i].status}`}>
          {value?.[i]}
        </span>
      ))}
    </p>
  )
}

export default Guess
