import React from "react";
import Board from "./components/Board";
import {calculateWinner} from "./components/helpers";

import "./App.css";

function App() {
  const [boardValues, setBoardValues] = React.useState(["X", "O", "X", "", "O", "O", "", "", ""]);
  const [xIsNext, setXIsNext] = React.useState(true);
  
  const winner = calculateWinner(boardValues)

  return (
    <div className="App">
      <Board squares={boardValues} />
    </div>
  );
}

export default App;
