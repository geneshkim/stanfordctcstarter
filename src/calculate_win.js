export function calculateWinner(squares) {
  let result = null;
  const numCols = squares.length ** 0.5;
  for (let i=0; i < numCols; ++i) { //check each column to see if there is three matching for win
    let top = squares[i];
    let mid = squares[i + numCols];
    let bottom = squares[i + numCols * 2];
    if (top !== null && top === mid && top === bottom) {
      if (top === "X") result = "X";
      if (top === "O") result = "O";
    }
  }  
  const numRows = numCols;
  for (let i=0; i<squares.length; i+=numRows) { //check each row to see if three match
    let first = squares[i];
    let second = squares[i + 1];
    let third = squares[i + 2];
    if (first !== null && first === second && first === third){
      if (first === "X") result = "X";
      if (first === "O") result = "O";
    }
  }
//check two diagonals
if (squares[0] !== null && squares[0] === squares[4] && squares[0] === squares[8]) {
  if (squares[0] === "X") result = "X";
      if (squares[0] === "O") result = "O";
}
if (squares[2] !== null && squares[2] === squares[4] && squares[2] === squares[6]) {
  if (squares[2] === "X") result = "X";
      if (squares[2] === "O") result = "O";
}
return result;
}
  