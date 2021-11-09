import React from 'react'
import '../styles/GameOver.css'

function GameOver (props) {
  const {
    currentScore,
    bestScore,
    maxScore
  } = props

  let endingText

  if (currentScore < bestScore) {
    endingText = 'Not quite!'
  } else if (currentScore === bestScore) {
    endingText = 'You tied your previous best!'
  } else if (currentScore > bestScore) {
    endingText = 'You did better than your previous best!'
  } else if (currentScore === maxScore) {
    endingText = 'You got the best possible score. Nicely done!'
  }

  return (
    <div className="game-over">
      <div className="ending-text-container">
        <p>{endingText}</p>
      </div>
      <button>Try Again</button>
    </div>
  )
}

export default GameOver
