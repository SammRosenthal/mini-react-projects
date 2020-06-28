import React, { useState } from "react";
import Board from "./components/board/board";

const numRows = 50;
const numCols = 50;

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
