import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className="App"> 
      <h2>Flower Power: Discover Different Blooms 🌺</h2>
      <h4>How many different types of flowers do you know? Test yourself and learn some more here!</h4>
      <h5>Number of cards: 10</h5>

      <Card />
    </div>
  )

}
export default App