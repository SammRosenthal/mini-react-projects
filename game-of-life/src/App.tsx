import React, { useState } from "react";

const numRows = 50;
const numCols = 50;

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    console.log(rows);

    return rows;
  });

  console.log(grid);
  return <div className="App">yo</div>;
}

export default App;
