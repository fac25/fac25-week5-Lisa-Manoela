function Win (props) {

    
    
    function playAgain() {
        localStorage.setItem("username", props.usrname);
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