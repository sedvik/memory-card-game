import React from 'react'
import Card from './Card'
import '../styles/Gameboard.css'

function Gameboard (props) {
  const { cards, playRound } = props

  return (
    <div className="game-board">
      {
        cards.map(card => {
          return (
            <Card
              key={card.id}
              id={card.id}
              src={card.src}
              alt={card.alt}
              title={card.title}
              playRound={playRound}
            />
          )
        })
      }
    </div>
  )
}

export default Gameboard
