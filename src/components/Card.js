import React from 'react'
import '../styles/Card.css'

function Card (props) {
  const {
    id,
    src,
    alt,
    title,
    playRound
  } = props

  function handleClick (e) {
    const cardId = e.target.getAttribute('data-id')
    playRound(cardId)
  }

  return (
    <div
      className="card"
      data-id={id}
      onClick={handleClick}
    >
      <div className="img-container">
        <img src={src} alt={alt} />
      </div>
      <div className="title-container">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card
