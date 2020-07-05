import React, { useState } from "react";
import Grid from "./components/grid/Grid";
import "./app.css";

let speed = 100;
let rows = 30;
let cols = 50;

function App() {
  const [generation, setGeneration] = useState(0);
  const [gridFull, setGridFull] = useState<Array<Array<boolean>>>(() => {
    return Array(rows).fill(Array(cols).fill(false));
  });

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

  const resetBoard = (): void => {
    let tempArr = Array(rows).fill(Array(cols).fill(false));
    setGridFull(tempArr);
  };

  const playGame = (): void => {
    clearInterval(intervalId);
    intervalId = setInterval(play, speed);
  };

  const play = () => {
    let grid = gridFull;
    let gridClone = arrayClone(gridFull);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;
        if (i > 0) if (grid[i - 1][j]) count++;
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
        if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) count++;
        if (j < cols - 1) if (grid[i][j + 1]) count++;
        if (j > 0) if (grid[i][j - 1]) count++;
        if (i < rows - 1) if (grid[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < cols - 1) if (grid[i + 1][j + 1]) count++;
        if (grid[i][j] && (count < 2 || count > 3)) gridClone[i][j] = false;
        if (!grid[i][j] && count === 3) gridClone[i][j] = true;
      }
    }
  };

  // this needs to be parsed out to a hook??
  const arrayClone = (arr: Array<Array<boolean>>): Array<Array<boolean>> => {
    return JSON.parse(JSON.stringify(arr));
  };

  return (
    <div>
      <h1>The Game of Life</h1>
      <button onClick={seed}>Random Board</button>
      <button onClick={resetBoard}>Empty Board</button>
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

export default App;
