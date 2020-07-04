import React from "react";
import "./cell.css";

type CellProps = {
  boxClass: string;
  key: string;
  id: string;
  boxId: string;
  row: number;
  col: number;
  selectBox: object;
};

const Cell = (props: CellProps) => {
  const selectBox = (): void => {
    if (typeof props.selectBox === "function") {
      props.selectBox(props.row, props.col);
    }
  };
  return (
    <div className={props.boxClass} id={props.id} onClick={() => selectBox()} />
  );
};

export default Cell;
