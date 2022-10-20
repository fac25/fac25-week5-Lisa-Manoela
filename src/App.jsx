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
      <p>Description: The game isn't finished yet. Currently, you can play by:
        <ul>
          <li>hover over a card and click on the number seen (clicking outside of it won't work)</li>
          <li>find the matching number (keep in mind your first choice is stored but not visible)</li>
          <li>click on the number inside the matching card</li>
          <li>if you have been successfull, your cards will turn green and flip again</li>
          <li>You can see your points and guesses as you play</li>
          <li>Find all matching pairs to go up a level</li>
        </ul>
      </p>
      {usrname==="" ? 
      <UserName usrname={usrname} setName={setName} />
      :
      <Game level={level} setLevel={setLevel} usrname={usrname} />
  }
    </main>
  )
}

export default App
