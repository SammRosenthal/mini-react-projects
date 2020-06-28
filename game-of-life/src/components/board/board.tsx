import React, { useState } from "react";
import Cell from "./cell/cell";

const numRows = 50;
const numCols = 50;

function Board() {
  const [board, makeBoard] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => <Cell />));
    }
    return rows;
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 22px)`,
      }}
    >
      {board}
    </div>
  );
}

export default Board;
