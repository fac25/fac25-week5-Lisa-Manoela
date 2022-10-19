import {useEffect, useState} from 'react'

const levels = {
  "level1": 8,
  "level2": 10,
  "level3": 12,
  "level4": 15,
  "level5": 18
}
 /*
  4X4
  4X5
  4x6
  5x6
  6x6
*/
// CREATE BOARD



// COMPONENT
function Game({level}) {
  const [points, setPoints] = useState(0)

  function arrayOfAscendingNums (n) {
    let newArray = [];
  
    for (let i = 0; i < n; i++) {
      newArray.push(i)
    }
  
    return newArray;
  }
  function createBoard(level, newGame) {
    const numOfCardsForCurrentLevel =  levels["level" + level]
      // console.log(numOfCardsForCurrentLevel)
    const uniqueCards = arrayOfAscendingNums(numOfCardsForCurrentLevel)
    const gameBoard = uniqueCards.concat(uniqueCards)
      // Randomise
       const randomisedBoard = gameBoard.sort( () => .5 - Math.random() )
    
      const board = randomisedBoard.map(
        (tile, index) => {
      return (<li className="tile" onClick={compareTiles} key={index} id={"tile"+index} >{tile}</li>)
    });
      return board 
    }
    

    // PLAY GAME
    let clicked = [];
    let match;
    let clickedIds = []
    let guesses = 0
    let score = 0
    
    function compareTiles(e) {
  
    clicked.push(e.target.innerText);
    clickedIds.push(e.target.id)
  
    if (clicked.length === 2 && clickedIds[0] !== clickedIds[1]) {
      guesses++
  
      match = clicked[0] === clicked[1]? true: false;
      clicked = []
      
      // If it's a match, hide the cards
      match && clickedIds.forEach((id) => {document.getElementById(id).style.display = "none"; setPoints(points + 1)})
      clickedIds = []
    } 
    return match
  }

  const board = createBoard(1)

    // [ 2, 0, 3, 1, 0, 4, 4, 1, 3, 2 ]
function Info({points}) {

  return (
    <span>
        <p>Points: <span id="points">{points}</span></p>
        <p>Guesses {guesses}</p>
        <p>Score {score}</p>
      </span>
  )
}

 useEffect(() => {
    document.getElementById("points").innerText=points;
  }, [points])

  return (
    <div>
      <Info points={points}/>
        <ul className="memoryGame">
          {board}
        </ul>
    </div>
  )
}

export default Game