import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {
  const [level, setLevel] = useState(1);

  return (
    <main>
      <h1>Memory game</h1> 
      <label>My name</label>
      <Game level={level} setLevel={setLevel} />
      
    </main>
  )
}

export default App
