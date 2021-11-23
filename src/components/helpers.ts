// This won't be used in tic tac toe.. just an example function!
export function addStuff(x: number, y: number): number {
  return x + y;
}

/*
Given an array of 9 squares, this function will check for a winner and return 'X', 'O', or null as appropriate.

If 'X' wins, return 'X'.
If 'O' wins, should return 'O'
If no one wins, should return null

Example input: ['X', 'X', 'X', null, null, null, null, null, null]
In the example above, 'X' is the winner since there is 3 in a row.
*/
export function calculateWinner(squares: string[]) : string | null {
  // Horizontal
  if (squares[0] === squares[1] && squares[0] === squares[2]) {
    return squares[0];
  } 
  if (squares[3] === squares[4] && squares[3] === squares[5]) {
    return squares[3];
  }
  if (squares[6] === squares[7] && squares[6] === squares[8]) {
    return squares[6];
  }
  // Vertical
  if (squares[0] === squares[3] && squares[0] === squares[6]) {
    return squares[0];
  }
  if (squares[1] === squares[4] && squares[1] === squares[7]) {
    return squares[1];
  }
  if (squares[6] === squares[7] && squares[6] === squares[8]) {
    return squares[1];
  }
  //Diagnol
  if (squares[0] === squares[4] && squares[0] === squares[8]) {
    return squares[0];
  }
  if (squares[2] === squares[4] && squares[4] === squares[6]) {
    return squares[2];
  }
  return null
}
