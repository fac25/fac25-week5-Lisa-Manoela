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

  let matchedClassNames = [];
 
// COMPONENT
function Game({level, setLevel, usrname, setGameOver}) {
  const [points, setPoints] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [score, setScore] = useState(0); //(points / guesses * 100)

  function createBoard() {

      const board = levelBoards[level].map(
        (tile, index) => {
      return (
      <div className={"tile"+index + " flip-card"}>
        <div className='flip-card-inner'>
          <p className="flip-card-front"></p>
          <p 
          className="tile flip-card-back" 
          onClick={compareTiles} 
          key={index} 
          id={"tile"+index} >
            {tile}
          </p>
        </div>
      </div>

      )
    });
      return board 
    }
    

    // PLAY GAME
    let clicked = [];
    let match;
    let clickedClassNames = []
    
    // let guesses = 0
    // let score = 0

  function checkIfShouldGoToNextLevel() {
    if(levels[`level${level}`] === (points + 1)) {

      if(level === 5) {setGameOver(true)}

      //unhide all of the tiles, reset the points and guesses to 0 and increase the level
      setPoints(0);
      setGuesses(0);
      setLevel(level + 1); 
      const allTiles = document.querySelectorAll(".tile");
      allTiles.forEach( (tile) => {
        //tile.style.display = "block";
        tile.classList.remove("guessed");
        matchedClassNames = []

      } )
      //setScore((points / guesses * 100))
    }
  }  
    function compareTiles(e) {

    // if (e.target.id == "") {
    //   return
    // } 
    const clickedDiv = e.target.closest(".flip-card").className.replace(" flip-card", "")
    if (clickedClassNames[0]==clickedDiv) {
      return
    }

    if (matchedClassNames.includes(clickedDiv)) {
      return
    }

    clicked.push(e.target.innerText);
    clickedClassNames.push(clickedDiv);
    //document.getElementById(e.target.id).classList.add("unclickable")
    // console.log(clickedClassNames)
    
    if (clicked.length === 2 ) {
      setGuesses(guesses + 1)
      //setScore((points / guesses * 100))
  
      match = clicked[0] === clicked[1]? true: false;
      clicked = []
      
      // If it's a match, hide the cards
      console.log(clickedClassNames)
      match && clickedClassNames.forEach((id) => {

        document.getElementById(id).classList.add("guessed");
        //document.getElementById(id).classList.add("unclickable");
        matchedClassNames.push(id);
        setPoints(points + 1);
      })
      clickedClassNames = []
      // console.log(matchedClassNames)
      checkIfShouldGoToNextLevel();
      
    }
    return match
  }

  const board = createBoard(level)

    // [ 2, 0, 3, 1, 0, 4, 4, 1, 3, 2 ]
function Info({points}) {

  return (
    <span className="userInfo">
        <h3>Username: {usrname}</h3>
        <h3>Points: <span id="points">{points}</span></h3>
        <h3>Guesses: {guesses}</h3>
        <h3>Score: {score}</h3>
        <h3>Level: {level}</h3>
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
