import React, { useState } from "react";
import Grid from "./components/grid/Grid";
import useInterval from "./hooks/useInterval";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

let cols: number = 50;
let rows: number = 30;

function App() {
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState<number | null>(null);
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
          newGridFullCopy[i][j] = true;
        }
      }
    }

    setGridFull(newGridFullCopy);
  };

  const playGame = (): void => {
    // clearInterval(intervalId);
    //intervalId = setInterval(play, speed);
    setSpeed(1000);
  };

  const pauseGame = (): void => {
    setSpeed(null);
  };

  const slow = (): void => {
    setSpeed(1000);
  };

  const fast = (): void => {
    setSpeed(100);
  };

  // this is working now :)
  const clearBoard = (): void => {
    const newGrid = Array(rows).fill(Array(cols).fill(false));
    setGridFull(newGrid);
    setGeneration(0);
  };

  // state is not updating????
  const play = () => {
    let grid = gridFull;
    let gridClone = arrayClone(grid);

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

  const arrayClone = (arr: Array<Array<boolean>>): Array<Array<boolean>> => {
    return JSON.parse(JSON.stringify(arr));
  };

  useInterval(play, speed);

  return (
    <>
      <Container>
        <Jumbotron>
          <h1>The Game of Life</h1>
          <h5>
            Create a random board or use your mouse to create a custom board!
          </h5>
        </Jumbotron>
        <Row className="justify-content-center">
          <Button className="m-1" variant="primary" onClick={seed}>
            Random Board
          </Button>{" "}
          <Button className="m-1" onClick={clearBoard}>
            Clear Board
          </Button>{" "}
          <Button className="m-1" variant="success" onClick={playGame}>
            Start
          </Button>{" "}
          <Button className="m-1" variant="danger" onClick={pauseGame}>
            Stop
          </Button>{" "}
          <Button className="m-1" onClick={slow}>
            Slow Down
          </Button>{" "}
          <Button className="m-1" onClick={fast}>
            Speed Up
          </Button>{" "}
        </Row>
        <Grid
          gridFull={gridFull}
          rows={rows}
          cols={cols}
          selectBox={selectBox}
        />
      </Container>
      <Row className="justify-content-center">
        <h2>Generations: {generation}</h2>
      </Row>
    </>
  );
}

export default App;
