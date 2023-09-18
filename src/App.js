import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
 
  const handleClick = (selectedIndex) => {
    let treasureIndex = Math.floor(Math.random() * board.length)
    let bombIndex= Math.floor(Math.random() * board.length)
    if (treasureIndex === bombIndex) {
      board[selectedIndex]= "⛈️"
      setBoard([...board])
    } else if (treasureIndex === selectedIndex) {
      board[selectedIndex]= "🌞"
      setBoard([...board])
    } else if (bombIndex === selectedIndex) {
      board[selectedIndex]= "⛈️"
      setBoard([...board])
    } else {
    board[selectedIndex]= "🏖️"
    setBoard([...board]) 
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>

    </>
  )
}

export default App
