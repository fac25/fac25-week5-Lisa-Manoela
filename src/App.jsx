import { useState } from 'react'
import './App.css'
import Game from './Game'
import UserName from './UserName'

function App() {
  const [level, setLevel] = useState(1);
  const [usrname, setName] = useState("");


  return (
    <main>
      <h1>Memory game</h1> 
      {usrname==="" ? 
      <UserName usrname={usrname} setName={setName} />
      :
      <Game level={level} setLevel={setLevel} usrname={usrname} />
  }
    </main>
  )
}

export default App
