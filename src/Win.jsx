function Win (props) {

    
    
    function playAgain() {
        localStorage.setItem("username", props.name);
        location.reload();
    }

    return (
        <div>
          <h2>You win!!</h2>
          <button type="button" onClick={playAgain} >Play again</button>
        </div>
    );
}

export default Win;