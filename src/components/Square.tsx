import React from "react";

type SquareProps = { value: string | number; onClick: () => void };

export default function Square(props: SquareProps) {
  return <button onClick={()=> props.onClick()} className="square">{props.value}</button>;
}
