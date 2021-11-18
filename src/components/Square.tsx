import React from "react";

type SquareProps = { value: string | number; onClick?: (i:number) => void };

export default function Square(props: SquareProps) {
  return <button className="square">{props.value}</button>;
}
