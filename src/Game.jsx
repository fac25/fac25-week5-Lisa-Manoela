
function Game() {
    const uniqueCards = [0, 1, 2, 3, 4]
    const gameBoard = uniqueCards.concat(uniqueCards)

    // Randomise
    const randomisedBoard = gameBoard.sort( () => .5 - Math.random() )

    // [ 2, 0, 3, 1, 0, 4, 4, 1, 3, 2 ]

  return (
    <div className="memoryGame">
        <ul>
            {randomisedBoard.map((tile) => (<li className="tile" id={"tile"+tile} ><h2>{tile}</h2></li>))}
            </ul>
    </div>
  )
}

export default Game