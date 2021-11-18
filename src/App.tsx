import React from "react";
import Board from "./components/Board";
import {calculateWinner} from "./components/helpers";

import "./App.css";

function App() {
  const [boardValues, setBoardValues] = React.useState(["X", "O", "X", "-", "O", "O", "-", "-", "-"]);
  const [xIsNext, setXIsNext] = React.useState(true);

  // The winner.
  const winner = calculateWinner(boardValues);

  return (
    <>
      <div className="App">
        <Board squares={boardValues} />
        <div>
          xIsNext current value:  {xIsNext ? 'true' : 'false' }
          <div>
            <button onClick={() => setXIsNext(false)}>
              Click me to change player
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
