import React, { useState } from "react";
import Grid from "./components/grid/Grid";

let speed = 100;
let rows = 30;
let cols = 50;

function App() {
  const [generation, setGeneration] = useState(0);
  const [gridFull, setGridFull] = useState<Array<Array<boolean>>>(() => {
    return Array(rows).fill(Array(cols).fill(false));
  });

  const selectBox = (row: number, col: number) => {
    console.log("hello world");
  };

  return (
    <div>
      <h1>The Game of Life</h1>
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

export default App;
