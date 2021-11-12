import React from "react";
import Board from "./components/Board";

import "./App.css";

function App() {
  const [boardValues, setBoardValues] = React.useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className="App">
      <Board squares={boardValues} />
    </div>
  );
}

export default App;
