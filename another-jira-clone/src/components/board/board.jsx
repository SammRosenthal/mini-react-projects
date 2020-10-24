import React, { useState } from 'react';
import Lane from './lane/lane';
import './board.scss';

function Board(props) {
    return (
        <div className="boardContainer">
            {props.cards.map((v, i) => {
                return <Lane
                    laneName={v.laneName}
                    laneItems={v.laneItems}
                />
            })}
        </div>
    )
}

export default Board;
