import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";



const Game = () => {
  const board_init = Array(9).fill(null);
const [board, setBoard] = useState(board_init);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
  let next = "X";

//handleclick
  const handleClick = (i) => {
    const newBoard = [...board];
if (winner !== null) {
alert("Whoops! There is already a winner. Restart the game to select a square");
} else if (board[i] !== null) {
alert("Whoops! That square is already taken. Please choose a different square.");
} else {
next = xIsNext ? "X" : "O";
    newBoard[i] = next;
    setBoard(newBoard);
    setStepNumber(stepNumber + 1);
    setXIsNext(xIsNext => !xIsNext);
};
}

//jump to start
  const jumpToStart = () => {
    setBoard(board_init);
    setStepNumber(0);
setXIsNext(true);
    next = "X";
  };

  const printResult = () => {
    if (winner !== null) {
return `Winner: ${winner}`;
    } else if (stepNumber === board.length)  {
return `Tie game`;
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  }      


  return (
  <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className='info-wrapper'>
          <div>
            <button onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{printResult()}</h3>
      </div>
  </>
  );
};

export default Game;
