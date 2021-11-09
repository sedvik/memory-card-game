import React from 'react'
import Card from './Card'
import '../styles/Gameboard.css'

function Gameboard (props) {
  const { cards } = props

  return (
    <div className="game-board">
      {
        cards.map(card => {
          return (
            <Card
              key={card.id}
              src={card.src}
              alt={card.alt}
              title={card.title}
            />
          )
        })
      }
    </div>
  )
}

export default Gameboard
