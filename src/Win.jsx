function Win (props) {
    
    function playAgain() {
        props.setLevel(1);
        props.setGameOver(false);
    }

    return (
        <div>
          <h2>You win!!</h2>
          <button type="button" onClick={playAgain} >Play again</button>
        </div>
    );
}

export default Win;