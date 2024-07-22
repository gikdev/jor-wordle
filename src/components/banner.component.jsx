function Banner({ theme, answer, guessesLength }) {
  return (
    <div className={`banner ${theme}`}>
      {theme === "happy" && (
        <p>
          <strong>Congratulations!</strong> <span>Got it in</span>{" "}
          <strong>{guessesLength} guesses</strong>.
        </p>
      )}
      {theme === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      {theme !== "happy" && theme !== "sad" && <p>Empty banner</p>}
    </div>
  )
}

export default Banner
