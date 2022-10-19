import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {
const [tileValue, setTileValue] = useState([]);
console.log(tileValue);

  return (
    <main>
      <h1>Memory game</h1> 
      <label>My name</label>
      <Game level="1" tileValue={tileValue} setTileValue={setTileValue}/>
      
    </main>
  )
}

export default App
