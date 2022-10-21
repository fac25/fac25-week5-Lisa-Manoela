function Win () {

    return (
        <div>
          <h2>You win!!</h2>
          <button type="button" onClick={location.reload()} >Play again</button>
        </div>
    );
    
}

export default Win;