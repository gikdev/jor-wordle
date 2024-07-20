import { useState } from "react"

function GuessInput({ addGuess }) {
  const [guess, setGuess] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  function handleInput(e) {
    const nextGuess = e.target.value.toUpperCase()
    const isInvalid = nextGuess.length !== 5 && nextGuess.length
    setErrorMsg(isInvalid ? "Your guess should be exactly 5 characters long" : "")
    setGuess(nextGuess)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!guess.length || guess.length !== 5) return

    console.log({ guess })
    addGuess(guess)
    setGuess("")
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess (5 chars only):</label>
      <input
        id="guess-input"
        maxLength={5}
        onChange={handleInput}
        pattern="[A-Za-z]{5}"
        type="text"
        value={guess}
      />
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </form>
  )
}

export default GuessInput
