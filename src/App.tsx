import React from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helpers";

import "./App.css";

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

  return (
    <>
      <div className="App">
        <Board squares={boardValues} onSquareClick={onSquareClickFunction}/>
        <div>
          Next Player: {xIsNext ? 'O' : 'X' }
          <div>
            <button onClick={() => setXIsNext(!xIsNext)}>
              Click me to change player
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
