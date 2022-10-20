import { useState, useEffect } from 'react'
import './App.css'
import Game from './Game'
import UserName from './UserName'
import Win from './Win'

function App() {
  const [level, setLevel] = useState(1);
  const [usrname, setName] = useState("");
  const [gameOver, setGameOver] = useState(false);


  useEffect(
    () => {
        console.log(localStorage.getItem("username"));
        localStorage.getItem("username")? setName(localStorage.getItem("username")): "";
    }, []
)

  return (
    <main>
      <h1>Memory game</h1> 
      {usrname === ""? 
      <UserName usrname={usrname} setName={setName} />
      : !gameOver?
      <Game level={level} setLevel={setLevel} usrname={usrname} setGameOver={setGameOver} />
      :<Win setLevel={setLevel} setGameOver={setGameOver} usrname={usrname} /> /*console.log("you win")*/
      }

      {/*gameOver === true? console.log("you win"): console.log("this did not work!!!")*/}
    </main>
  )
}

export default App
