import React from "react";

type SquareProps = { value: string | number };

export default function Square(props: SquareProps) {
  return <button className="square">{props.value}</button>;
}
// export default function Square(props: SquareProps) {
//   return <button className="square">props.square</button>;
// }
