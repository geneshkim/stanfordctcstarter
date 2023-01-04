//function that calculates if there is a winner on a 3x3 tic tac toe board.
export function calculateWinner(squares) {
  let result = null;
  const numCols = squares.length ** 0.5;
  for (let i=0; i < numCols; ++i) { //check each column to see if there is three matching for win
    const top = squares[i];
    const mid = squares[i + numCols];
    const bottom = squares[i + numCols * 2];
    if (top !== null && top === mid && top === bottom) {
      result = top;
    }
  }  
  const numRows = numCols;
  for (let i=0; i<squares.length; i+=numRows) { //check each row to see if three match
    const left = squares[i];
    const middle = squares[i + 1];
    let right = squares[i + 2];
    if (left !== null && left === middle && left === right) {
      result = left;
    }
  }
//check two diagonals
if (squares[0] !== null && squares[0] === squares[4] && squares[0] === squares[8]) {
  result = squares[0];
  }
  if (squares[2] !== null && squares[2] === squares[4] && squares[2] === squares[6]) {
  result = squares[2];
  }
return result;
}
  