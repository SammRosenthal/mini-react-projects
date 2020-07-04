import React, { useState, useEffect, useCallback, useRef } from "react";
import Cell from "./cell/cell";

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 1],
  [1, 0],
  [-1, 1],
  [-1, -1],
  [-1, 0],
];

function Board() {
  const [board, setBoard] = useState();
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let gameBoard = makeBoard();
    setBoard(gameBoard);
  }, []);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setTimeout(runSimulation, 1000);
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
        <button onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button>
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
