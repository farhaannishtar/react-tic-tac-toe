import React from "react";
import Square from "./Square";

type BoardProps = { squares: string[]; onSquareClick: (i: number) => void };

export default function Board(props: BoardProps) {
  return (
    <div>
      <div className="board-row">
        <Square
          onClick={() => props.onSquareClick(0)}
          value={props.squares[0]}
        />
        <Square
          onClick={() => props.onSquareClick(1)}
          value={props.squares[1]}
        />
        <Square
          onClick={() => props.onSquareClick(2)}
          value={props.squares[2]}
        />
      </div>
      <div className="board-row">
        <Square
          onClick={() => props.onSquareClick(3)}
          value={props.squares[3]}
        />
        <Square
          onClick={() => props.onSquareClick(4)}
          value={props.squares[4]}
        />
        <Square
          onClick={() => props.onSquareClick(5)}
          value={props.squares[5]}
        />
      </div>
      <div className="board-row">
        <Square
          onClick={() => props.onSquareClick(6)}
          value={props.squares[6]}
        />
        <Square
          onClick={() => props.onSquareClick(7)}
          value={props.squares[7]}
        />
        <Square
          onClick={() => props.onSquareClick(8)}
          value={props.squares[8]}
        />
      </div>
    </div>
  );
}

