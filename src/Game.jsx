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

const levelBoards = {
  1 : createArray(1),
  2 : createArray(2),
  3 : createArray(3),
  4 : createArray(4),
  5 : createArray(5)
  }
// CREATE BOARD

function createArray (level) {
    let newArray = [];
  
    for (let i = 0; i < levels["level" + level]; i++) {
      newArray.push(i)
    }

      // console.log(numOfCardsForCurrentLevel)
    const uniqueCards = newArray
    const gameBoard = uniqueCards.concat(uniqueCards)
      // Randomise
    const randomisedBoard = gameBoard.sort( () => .5 - Math.random() )
    return randomisedBoard
  }
 
// COMPONENT
function Game({level, setLevel}) {
  const [points, setPoints] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [score, setScore] = useState(0); //(points / guesses * 100)

  function createBoard() {

      const board = levelBoards[level].map(
        (tile, index) => {
      return (<p className="tile" onClick={compareTiles} key={index} id={"tile"+index} >{tile}</p>)
    });
      return board 
    }
    

    // PLAY GAME
    let clicked = [];
    let match;
    let clickedIds = []
    // let guesses = 0
    // let score = 0

  function checkIfShouldGoToNextLevel() {
    if(levels[`level${level}`] === (points + 1)) {
      //unhide all of the tiles, reset the points and guesses to 0 and increase the level
      setPoints(0);
      setGuesses(0);
      setLevel(level + 1); 
      const allTiles = document.querySelectorAll(".tile");
      allTiles.forEach( (tile) => {
        tile.style.display = "block";
        tile.classList.remove("guessed", "unclickable");

      } )
      //setScore((points / guesses * 100))
    }
  }  
    function compareTiles(e) {

    if (e.target.id == "") {
      return
    } 
    
    if (clickedIds[0]==e.target.id) {
      return
    }

    clicked.push(e.target.innerText);
    clickedIds.push(e.target.id);
    document.getElementById(e.target.id).classList.add("unclickable")
    console.log(clickedIds)
    
    if (clicked.length === 2 ) {
      setGuesses(guesses + 1)
      //setScore((points / guesses * 100))
  
      match = clicked[0] === clicked[1]? true: false;
      clicked = []
      
      // If it's a match, hide the cards
      match && clickedIds.forEach((id) => {

        document.getElementById(id).classList.add("guessed", "unclickable");
        setPoints(points + 1);
      })
      clickedIds = []
      checkIfShouldGoToNextLevel();
      
    }
    return match
  }

  const board = createBoard(level)

    // [ 2, 0, 3, 1, 0, 4, 4, 1, 3, 2 ]
function Info({points}) {

  return (
    <span>
        <p>Points: <span id="points">{points}</span></p>
        <p>Guesses: {guesses}</p>
        <p>Score: {score}</p>
        <p>Level: {level}</p>
      </span>
  )
}

//  useEffect(() => {
//     document.getElementById("points").innerText=points;
//   }, [points])

  return (
    <div>
      <Info points={points}/>
        <div className="memoryGame">
          {board}
        </div>
    </div>
  )
}

export default Game