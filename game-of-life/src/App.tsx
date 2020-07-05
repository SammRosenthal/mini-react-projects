import React, { useState } from "react";
import Grid from "./components/grid/Grid";
import "./app.css";

let cols = 50;
let rows = 30;

function App() {
  const [generation, setGeneration] = useState(0);
  const [gridFull, setGridFull] = useState<Array<Array<boolean>>>(() => {
    return Array(rows).fill(Array(cols).fill(false));
  });

  let speed: number = 100;
  let intervalId: any = undefined;

  const selectBox = (row: number, col: number): void => {
    let gridFullCopy = arrayClone(gridFull);
    gridFullCopy[row][col] = !gridFullCopy[row][col];
    setGridFull(gridFullCopy);
  };

  const seed = (): void => {
    let newGridFullCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          console.log("we in here");
          newGridFullCopy[i][j] = true;
        }
      }
    }
    setGridFull(newGridFullCopy);
  };

  const playGame = (): void => {
    clearInterval(intervalId);
    intervalId = setInterval(play, speed);
  };

  const pauseGame = (): void => {
    clearInterval(intervalId);
  };

  const slow = (): void => {
    speed = 1000;
    playGame();
  };

  const fast = (): void => {
    speed = 100;
    playGame();
  };

  const gridSize = (size: string): void => {
    switch (size) {
      case "1":
        cols = 20;
        rows = 10;
        break;
      case "2":
        cols = 50;
        rows = 30;
        break;
      default:
        cols = 70;
        rows = 50;
    }
    clearBoard();
  };

  const clearBoard = (): void => {
    const newGrid = Array(rows).fill(Array(cols).fill(false));
    setGridFull(newGrid);
    setGeneration(0);
  };

  const play = () => {
    let grid = gridFull;
    let gridClone = arrayClone(gridFull);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let neighbors = 0;
        if (i > 0) if (grid[i - 1][j]) neighbors++;
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) neighbors++;
        if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) neighbors++;
        if (j < cols - 1) if (grid[i][j + 1]) neighbors++;
        if (j > 0) if (grid[i][j - 1]) neighbors++;
        if (i < rows - 1) if (grid[i + 1][j]) neighbors++;
        if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) neighbors++;
        if (i < rows - 1 && j < cols - 1) if (grid[i + 1][j + 1]) neighbors++;
        if (grid[i][j] && (neighbors < 2 || neighbors > 3))
          gridClone[i][j] = false;
        if (!grid[i][j] && neighbors === 3) gridClone[i][j] = true;
      }
    }
    setGeneration(generation + 1);
    setGridFull(gridClone);
  };

  // this needs to be parsed out to a hook??
  const arrayClone = (arr: Array<Array<boolean>>): Array<Array<boolean>> => {
    return JSON.parse(JSON.stringify(arr));
  };

  return (
    <div>
      <h1>The Game of Life</h1>
      <button onClick={seed}>Random Board</button>
      <button onClick={clearBoard}>Clear Board</button>
      <button onClick={playGame}>Start</button>
      <button onClick={pauseGame}>Stop</button>
      <button onClick={slow}>Slow Down</button>
      <button onClick={fast}>Speed Up</button>
      <button onClick={() => gridSize("1")}>Change Size</button>
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

export default App;
