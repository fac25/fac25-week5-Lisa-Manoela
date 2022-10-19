import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {

  return (
    <main>
      <h1>Memory game</h1> 
      <label>My name</label>
      <Game level="1" />
      
    </main>
  )
}

export default App
