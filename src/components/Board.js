import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => (
  <div className="board">
  {squares.map(
(val, idx) => (  
<Square key={idx} value={val} onClick={() => onClick(idx)} /*aria-label={`square ${idx} of 9, containing ${val}`}*/ />
))}
 </div>
);


export default Board;
