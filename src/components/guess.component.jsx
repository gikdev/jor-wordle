import { range } from "@/utils"

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map(i => (
        <span key={i} className="cell">
          {guess?.[i]}
        </span>
      ))}
    </p>
  )
}

export default Guess
