import React from 'react'
import '../styles/Scoreboard.css'

function Scoreboard (props) {
  const {
    currentScore,
    bestScore
  } = props

  return (
    <div className="scoreboard">
      <div className="score-container">
        <p>{`Score: ${currentScore}`}</p>
      </div>
      <div className="score-container">
        <p>{`Best: ${bestScore}`}</p>
      </div>
    </div>
  )
}

export default Scoreboard
