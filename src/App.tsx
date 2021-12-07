import React from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helpers";

import "./App.css";
import { count } from "console";

function App() {
  // This represents the 9 squares of the tic-tac-toe board.
  const [boardValues, setBoardValues] = React.useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  // This is a boolean to help us keep track of who's turn it is.
  const [xIsNext, setXIsNext] = React.useState(true);

  // The winner.
  const winner = calculateWinner(boardValues);

  // This function is called whenever a square is clicked.
  // When clicked, the function is passed in a numerical value 1-9 
  // to indicate which square was clicked.
  // When a square is clicked, the board should 
  // 1) update to show that that player marked the square 
  const onSquareClickFunction = (i: number) => {
    console.log(i)
    let cloneBoardValues = [...boardValues];
    if (cloneBoardValues[i] !== '-') {
      return;
    }
    cloneBoardValues[i] = xIsNext ? 'O' : 'X';
    setBoardValues(cloneBoardValues);
    setXIsNext(!xIsNext);

    let winner = calculateWinner(cloneBoardValues);
    console.log(winner);
    const gameOver = cloneBoardValues.every((element: string) => element !== '-');
    if (winner !== '-') {
      displayWinner(winner);
    } else if (gameOver && winner === null) {
      displayWinner(winner);
    }
  }

  const displayWinner = (winner: string | null) => {
    if (winner === null) {
      return `It's a Tie`;
    } else if (winner === '-' || winner === '') {
      return '';
    } else {  
      return `${winner} is the Winner`;
    }
  }

  const resetGame = () => {
    setBoardValues(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  }

  const computerTurn = () => {
    // Creating copy of the board
    let cloneBoardValues = [...boardValues];    

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
    onSquareClickFunction(computerChoice);
  }

  return (
    <>
      <div className="App">
        <Board squares={boardValues} onSquareClick={onSquareClickFunction}/>
        <div>
          Next Player: {xIsNext ? 'O' : 'X' }
          <div>
            <button onClick={() => computerTurn()}>
              Computer's Turn
            </button>
            <button onClick={() => resetGame()}>
                Play Again
              </button>
            <div>
              {displayWinner(winner)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
