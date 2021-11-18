import React from "react";
import Square from "./Square";

type BoardProps = { squares: string[] };

export default function Board(props: BoardProps) {
  return (
    <div>
      <div className="board-row">
        <Square value={props.squares[0]} />
        <Square value={props.squares[1]} />
        <Square value={props.squares[2]} />
      </div>
      <div className="board-row">
        <Square value={props.squares[3]} />
        <Square value={props.squares[4]} />
        <Square value={props.squares[5]} />
      </div>
      <div className="board-row">
        <Square value={props.squares[6]} />
        <Square value={props.squares[7]} />
        <Square value={props.squares[8]} />
      </div>
    </div>
  );
}
