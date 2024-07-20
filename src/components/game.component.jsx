import { GuessInput } from "@/components"
import { WORDS } from "@/data"
import { sample } from "@/utils"

const answer = sample(WORDS)
console.log({ answer })

function Game() {
  return <GuessInput />
}
export default Game
