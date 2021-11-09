import React from 'react'
import Scoreboard from './Scoreboard'
import Gameboard from './Gameboard'
import GameOver from './GameOver'
import '../styles/MemoryGame.css'

function MemoryGame (props) {
  const {
    cards,
    gameIsOver,
    currentScore,
    bestScore
  } = props

  return (
    <div className="memory-game">
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
      />
      {
        gameIsOver
          ? <GameOver
              currentScore={currentScore}
              bestScore={bestScore}
              maxScore={cards.length}
            />
          : <Gameboard cards={cards}/>
      }
    </div>
  )
}

export default MemoryGame
