import React, { useState, useLayoutEffect } from 'react'
import Scoreboard from './Scoreboard'
import Gameboard from './Gameboard'
import GameOver from './GameOver'
import initialCards from '../util/cardData'
import '../styles/MemoryGame.css'

function MemoryGame () {
  const [cards, setCards] = useState(initialCards)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  // Side Effect for card shuffling when component first mounts and every time the score updates. Also ends the game if the max possible score has been achieved.
  useLayoutEffect(() => {
    if (currentScore === cards.length) {
      endGame()
    } else {
      shuffleCards()
    }
  }, [currentScore])

  function shuffleCards () {
    const newCards = [...cards]

    // Shuffle newCards array using Durstenfield shuffle
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newCards[i], newCards[j]] = [newCards[j], newCards[i]]
    }

    setCards(newCards)
  }

  function resetGame (newBestScore) {
    // Reset 'picked' property to false for all cards
    const newCards = cards.map(card => {
      return Object.assign({}, card, { picked: false })
    })
    setCards(newCards)

    // Update bestScore if applicable
    if (newBestScore !== null) {
      setBestScore(newBestScore)
    }

    // Reset current Score
    setCurrentScore(0)

    // Set gameIsOver to false
    setGameIsOver(false)
  }

  function endGame () {
    setGameIsOver(true)
  }

  function playRound (cardId) {
    // Check if valid card choice was picked
    const card = cards.find(card => card.id === cardId)

    // If valid choice was picked, increment current score and update card state
    if (card.picked === false) {
      setCurrentScore(prevCurrentScore => prevCurrentScore + 1)
      setCards(prevCards => {
        return prevCards.map(card => {
          return (
            card.id === cardId
              ? Object.assign({}, card, { picked: true })
              : card
          )
        })
      })
    } else {
      endGame()
    }
  }

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
              resetGame={resetGame}
            />
          : <Gameboard
              cards={cards}
              playRound={playRound}
            />
      }
    </div>
  )
}

export default MemoryGame
