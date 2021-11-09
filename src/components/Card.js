import React from 'react'
import '../styles/Card.css'

function Card (props) {
  const {
    src,
    alt,
    title
  } = props

  return (
    <div className="card">
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
