import React from 'react'
import Header from './components/Header'
import MemoryGame from './components/MemoryGame'
import cards from './util/cardData'
import './styles/App.css'

function App () {
  return (
    <div className="App">
      <Header />
      <MemoryGame
        cards={cards}
        gameIsOver={true}
        currentScore={3}
        bestScore={7}
      />
    </div>
  )
}

export default App
