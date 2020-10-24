import React from 'react';
import Lane from './lane/lane';
import './board.scss';

function Board(props) {
    return (
        <div className="boardContainer">
            <Lane laneName="TO DO" cards={props.todo} />
            <Lane laneName="IN PROGRESS" cards={props.inProgress} />
            <Lane laneName="IN TEST" cards={props.inTest} />
            <Lane laneName="DONE" cards={props.done} />
        </div>
    )
}

export default Board;
