import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";



const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  let next = "X";

  //handleclick
  const handleClick = (i) => {
    let board = history[stepNumber];
    if (winner !== null) {
      alert("Whoops! There is already a winner. Restart the game to select a square");
    } else if (board[i] !== null) {
      alert("Whoops! That square is already taken. Please choose a different square.");
    } else {
      next = xIsNext ? "X" : "O";
      let tempBoard = [...board];
      tempBoard[i] = next;
      setHistory([...history.slice(0, stepNumber + 1), tempBoard]);
      setStepNumber(history.slice(0, stepNumber + 1).length);
      setXIsNext(xIsNext => !xIsNext);
    };
  }

  //jump to step
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0); //every even step is x (e.g. 0, 2, 4...)
    };

  const renderMoves = () =>
    history.map((boardAtStep, step) => {
    const message = `Go to step ${step}`;
    return (
      <button key={step} onClick={() => jumpTo(step)}>{message}</button>
    );
  });

  const printResult = () => {
    if (winner !== null) {
      return `Winner: ${winner}`;
    } else if (stepNumber === history[stepNumber].length) {
      return `Tie game`;
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };


  return (
  <>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className='info-wrapper'>
          <div>
          <h3>History</h3>
  {renderMoves()}
          </div>
  
          <h3>{printResult()}</h3>
      </div>
  </>
  );
};

export default Game;
