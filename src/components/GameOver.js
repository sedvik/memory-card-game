import React from 'react'
import '../styles/GameOver.css'

function GameOver (props) {
  const {
    currentScore,
    bestScore,
    maxScore,
    resetGame
  } = props

  function handleClick () {
    // Determine if a new best score was obtained
    let newBestScore
    currentScore > bestScore
      ? newBestScore = currentScore
      : newBestScore = null

    // Reset the game
    resetGame(newBestScore)
  }

  let endingText

  if (currentScore < bestScore) {
    endingText = 'Not quite!'
  } else if (currentScore === bestScore) {
    endingText = 'You tied your previous best!'
  } else if (currentScore === maxScore) {
    endingText = 'You got the best possible score. Nicely done!'
  } else if (currentScore > bestScore) {
    endingText = 'You did better than your previous best!'
  }

  return (
    <div className="game-over">
      <div className="ending-text-container">
        <p>{endingText}</p>
      </div>
      <button onClick={handleClick}>Try Again</button>
    </div>
  )
}

export default GameOver
