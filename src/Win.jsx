function Win () {

    return (
        <div>
          <h2>You win!!</h2>
          <button type="button" onClick={location.reload()} >Play again</button>
        </div>
    );
    
}

// TO DO: Don't clear matched Ids when winning

export default Win;