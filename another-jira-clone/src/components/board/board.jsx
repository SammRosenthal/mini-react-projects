import React from "react";
import Lane from "./lane/lane";
import "./board.scss";

function Board(props) {
  return (
    <div className="boardContainer">
      <Lane laneName="TO DO" cards={props.todo} deleteCard={props.deleteCard} />
      <Lane
        laneName="IN PROGRESS"
        cards={props.inProgress}
        deleteCard={props.deleteCard}
      />
      <Lane
        laneName="IN TEST"
        cards={props.inTest}
        deleteCard={props.deleteCard}
      />
      <Lane laneName="DONE" cards={props.done} deleteCard={props.deleteCard} />
    </div>
  );
}

export default Board;
