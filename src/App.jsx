import { useState } from 'react'
import './App.css'
import Game from './Game'
import UserName from './UserName'
import Win from './Win'

function App() {
  const [level, setLevel] = useState(1);
  const [usrname, setName] = useState("");
  const [gameOver, setGameOver] = useState(false);


  return (
    <main>
      <h1>Memory game</h1> 
      {usrname === ""? 
      <UserName usrname={usrname} setName={setName} />
      : !gameOver?
      <Game level={level} setLevel={setLevel} usrname={usrname} setGameOver={setGameOver} />
      :<Win /> /*console.log("you win")*/
      }

      {/*gameOver === true? console.log("you win"): console.log("this did not work!!!")*/}
    </main>
  )
}

export default App
