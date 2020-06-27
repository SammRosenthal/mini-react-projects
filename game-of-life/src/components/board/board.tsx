import React, { useState } from "react";
import Cell from "./cell/cell.tsx";

const numRows = 50;
const numCols = 50;

function Board() {
    const [board: Cell[][], makeBoard: function] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => <Cell />));
    }
  });

  return <div>{board.map((i: Cell) => i)}</div>;
}
