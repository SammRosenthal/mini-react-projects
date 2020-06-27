import React, { useState } from "react";

function Cell() {
  const [alive, setAlive] = useState(false);

  return (
    <div
      onClick={() => setAlive(!alive)}
      style={{
        width: 20,
        height: 20,
        backgroundColor: alive ? "pink" : undefined,
        border: "solid 1px black",
      }}
    ></div>
  );
}

export default Cell;
