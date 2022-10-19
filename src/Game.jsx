import {useEffect} from 'react'

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

function arrayOfAscendingNums (n) {
  let newArray = [];

  for (let i = 0; i < n; i++) {
    newArray.push(i)
  }

  return newArray;
}

function Game({level, tileValue, setTileValue}) {
 
  // useEffect(() => {
  //   const memoryGame = document.querySelectorAll(".indTile")
  //   memoryGame.forEach((indTile) => {indTile.addEventListener("click", console.log("test"))});
  //   return memoryGame.forEach((indTile) => {indTile.removeEventListener("click", compareTiles) });
  // }, []);
  let clicked = [];
  let match;
  
  function compareTiles(e) {

    console.log(e.target.innerText)
    clicked.push(e.target.innerText);
    if (clicked.length === 2) {
      match = clicked[0] === clicked[1]? true: false;
      clicked = []
    }
    
  }
    const numOfCardsForCurrentLevel =  levels["level" + level]
    // console.log(numOfCardsForCurrentLevel)

    const uniqueCards = arrayOfAscendingNums(numOfCardsForCurrentLevel)
    const gameBoard = uniqueCards.concat(uniqueCards)

    // Randomise
    const randomisedBoard = gameBoard.sort( () => .5 - Math.random() )

    // [ 2, 0, 3, 1, 0, 4, 4, 1, 3, 2 ]
function RandomiseBoard(){
  const board = randomisedBoard.map(
    (tile, index) => {
  return (<li className="tile" onClick={compareTiles} key={index} id={"tile"+tile} ><h2>{tile}</h2></li>)
});
  return board 
}

  return (
    <div>
        <ul className="memoryGame">
          <RandomiseBoard/>
        </ul>
    </div>
  )
}

export default Game