import React from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helpers";

import "./App.css";

function App() {
  // This represents the 9 squares of the tic-tac-toe board.
  const [boardValues, setBoardValues] = React.useState(["X", "O", "X", "-", "O", "O", "-", "-", "-"]);
  // This is a boolean to help us keep track of who's turn it is.
  const [xIsNext, setXIsNext] = React.useState(true);

  // The winner.
  const winner = calculateWinner(boardValues);

  return (
    <>
      <div className="App">
        <Board squares={boardValues} />
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
