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
  // to indicated which square was clicked.
  // When a square is clicked, the board should 
  // 1) update to show that that player marked the square 
  const onSquareClickFunction = (i: number) => {
    console.log(i)
    //TODO:
  }
  return (
    <>
      <div className="App">
        <Board squares={boardValues} onSquareClick={onSquareClickFunction} />
        <div>
          Next Player: O  {xIsNext ? 'true' : 'false' }
          <div>
            <button onClick={() => setXIsNext(!xIsNext)}>
              Click me to change player
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
