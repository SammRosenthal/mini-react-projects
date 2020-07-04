import React from "react";
import Cell from "../board/cell/cell";

function Grid(props: {
  gridFull: Array<Array<boolean>>;
  rows: number;
  cols: number;
  selectBox: object;
}) {
  const width = props.cols * 14;
  let rowsArr = [];

  let boxClass = "";
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let boxId = i + " " + j;
      boxClass = props.gridFull[i][j] ? "box on" : "box off";
      rowsArr.push(
        <Cell
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={props.selectBox}
        />
      );
    }
  }

  return (
    <h1 className="grid" style={{ width: width }}>
      {{ rowsArr }}
    </h1>
  );
}

export default Grid;
