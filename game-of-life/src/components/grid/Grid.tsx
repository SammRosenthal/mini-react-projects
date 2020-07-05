import React, { useState, useEffect } from "react";
import Cell from "../board/cell/cell";
import "./grid.css";

type GridProps = {
  gridFull: Array<Array<boolean>>;
  rows: number;
  cols: number;
  selectBox: object;
};
const Grid = (props: GridProps) => {
  const width = props.cols * 16;
  const [rowsArr, setRowsArr] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let tempArr: JSX.Element[] = [];

    for (let i = 0; i < props.rows; i++) {
      for (let j = 0; j < props.cols; j++) {
        let boxId = i + " " + j;
        tempArr.push(
          <Cell
            boxClass={props.gridFull[i][j] ? "box on" : "box off"}
            key={boxId}
            id={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={props.selectBox}
          />
        );
      }
    }
    setRowsArr(tempArr);
  }, [props.rows, props.cols, props.selectBox, props.gridFull]);

  return (
    <h1 className="grid" style={{ width: width }}>
      {rowsArr}
    </h1>
  );
};

export default Grid;
