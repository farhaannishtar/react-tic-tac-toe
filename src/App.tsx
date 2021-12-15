import React, { useEffect } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helpers";
import "./App.css";

function App() {
  // This represents the 9 squares of the tic-tac-toe board.
  const [boardValues, setBoardValues] = React.useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  // This is a boolean to help us keep track of who's turn it is.
  const [xIsNext, setXIsNext] = React.useState(true);
  // Keeping track of the Winners
  const [xWins, setXWins] = React.useState(0);
  const [oWins, setOWins] = React.useState(0);

  // Toggle button for for computer mode
  let computerMode = document.getElementById('computerMode') as HTMLInputElement;
  
  // Getting the winner
  const winner = calculateWinner(boardValues);

  // This function is called whenever a square is clicked.
  // When clicked, the function is passed in a numerical value 1-9 
  // to indicate which square was clicked.
  // When a square is clicked, the board should 
  // update to show that that player marked the square 
  const onSquareClickFunction = (move: number, message?: string) => {

    // Add the move that was passed into this function to a clone of the board
    let cloneBoardValues = [...boardValues];
    if (cloneBoardValues[move] !== '-') {
      return;
    }
    cloneBoardValues[move] = xIsNext ? 'X' : 'O';


    // When we're against the computer, we get both the user's move and computer's move 
    // before updating the state of the board
    
    // If this is the computer's first move after being toggled on, 
    // we don't need to generate another random move. 
    if (computerMode.checked === true && message !== 'Computer first move') {
      let computerMove: number = generateComputerMove(cloneBoardValues);
      cloneBoardValues[computerMove] = xIsNext ? 'O' : 'X';
    }

    // update the state of the board using the clone
    setBoardValues(cloneBoardValues); 
    // If this isn't the computer's first move then two moves were recorded
    // Update the state so the same player is next
    if (computerMode.checked === true && message !== 'Computer first move') {
      setXIsNext(xIsNext);
    } else {
      setXIsNext(!xIsNext);
    }  
  }

  const generateComputerMove = (cloneBoardValues: string[]) : number => {
    // Creating a Map to place the empty squares for the computer to choose from
    let computerSpace = new Map<number, number>();
    let index = 0;

    // Filling in the Computer's workspace
    // The keys are the indexes of the Map 
    // The values are the positions of the empty squares on the board  (0-8)
    for (let i = 0; i < cloneBoardValues.length; i++) {
      if (cloneBoardValues[i] === '-') {
        computerSpace.set(index, i);
        index++;
      }
    }
    // Getting the keys of the Map
    let keys = Array.from(computerSpace.keys());

    // Selecting a random key
    let randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Getting the position of the empty square from the random key
    let computerChoice = Number(computerSpace.get(randomKey));

    // Computer sending its move to that square 
    return computerChoice;
  }

  React.useEffect(() => {
    console.log("End of game");
    if (winner === 'X') {
      setXWins(xWins + 1);
    } else if (winner === 'O') {
      setOWins(oWins + 1);
    }
    resetGame();
  }, [winner]); // Only re-run the effect if winner changes

  const resetGame = () => {
    setBoardValues(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  }

  // Executes only once everytime we switch on or off 'Play with Computer' toggle button
  const againstComputer = () => {
    // When we're done playing with the computer, we want to exit 
    // and not generate another move. 
    if (computerMode.checked === false) {
      console.log('Toggle mode off');
      return;
    }

    // When we toggle 'Play with Computer' button on, we first generate the computer's move 
    let computerMove: number = generateComputerMove(boardValues);
    // We pass in that move and 'Computer first move' string to submit 
    // the computer's first move after being toggled on
    onSquareClickFunction(computerMove, 'Computer first move');
  }

  return (
    <>
      <div className="App">
        <div>
          O wins: {oWins} | X wins: {xWins}
        </div>
        <Board squares={boardValues} onSquareClick={onSquareClickFunction}/>
        <div>
          Next Player: {xIsNext ? 'X' : 'O' }
          <div>
            <button onClick={() => resetGame()}>
                Play Again
            </button>
            <br></br>
            Play with Computer 
            <label className="switch">
              <input id="computerMode" type="checkbox" onClick={() => againstComputer()}></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
