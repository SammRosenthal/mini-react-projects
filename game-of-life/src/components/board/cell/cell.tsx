import React, { useState, useEffect, SFC } from "react";

interface Props {
  status: boolean;
}

const Cell: React.SFC<Props> = (props) => {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    setAlive(props.status);
  }, []);
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
};

export default Cell;
