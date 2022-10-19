const levels = {
  "level1": 8,
  "level2": 10,
  "level3": 12,
  "level4": 15,
  "level5": 18
}

function arrayOfAscendingNums (n) {
  let newArray = [];

  for (let i = 0; i < n; i++) {
    newArray.push(i)
  }

  return newArray;
}


function Game({level}) {
 
 /*
  4X4
  4X5
  4x6
  5x6
  6x6
*/

    const numOfCardsForCurrentLevel =  levels["level" + level]
    console.log(numOfCardsForCurrentLevel)

    const uniqueCards = arrayOfAscendingNums(numOfCardsForCurrentLevel)
    const gameBoard = uniqueCards.concat(uniqueCards)

    // Randomise
    const randomisedBoard = gameBoard.sort( () => .5 - Math.random() )

    // [ 2, 0, 3, 1, 0, 4, 4, 1, 3, 2 ]

  return (
    <div>
        <ul className="memoryGame">
            {randomisedBoard.map((tile) => (<li className="tile" id={"tile"+tile} ><h2>{tile}</h2></li>))}
        </ul>
    </div>
  )
}

export default Game