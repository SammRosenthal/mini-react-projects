import React, { useState, useEffect } from "react";
import Cell from "./cell/cell";

const numRows = 50;
const numCols = 50;

function Board() {
  const [board, setBoard] = useState();

  useEffect(() => {
    let gameBoard = makeBoard();
    setBoard(gameBoard);
  }, []);

  const makeBoard = () => {
    console.log("working");
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => <Cell status={false} />));
    }
    return rows;
  };

  return (
    <>
      <div
        style={{
          display: "inline",
        }}
      >
        <button>Start</button>
        <button>Stop</button>
        <button onClick={() => setBoard(makeBoard())}>Reset</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 22px)`,
        }}
      >
        {board}
      </div>
    </>
  );
}

export default Board;
