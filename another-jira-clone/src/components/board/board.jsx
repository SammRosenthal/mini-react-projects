import React, {useState} from 'react';
import Lane from './lane/lane';
import './board.scss';

function Board() {
    const [data, setData] = useState([
        {
            laneName: "TO DO",
            laneItems: [
                {
                    title: "Sam's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Sam Rosenthal"
                },
                {
                    title: "Joe's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Joe Smith"
                },
                {
                    title: "Dan's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Dan Nguyen"
                }
            ]
        },{
            laneName: "IN PROGRESS",
            laneItems: [
                {
                    title: "Sam's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Sam Rosenthal"
                },
                {
                    title: "Joe's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Joe Smith"
                },
                {
                    title: "Dan's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Dan Nguyen"
                }
            ]
        },{
            laneName: "IN TEST",
            laneItems: []
        },{
            laneName: "DONE",
            laneItems: [
                {
                    title: "Sam's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Sam Rosenthal"
                },
                {
                    title: "Joe's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Joe Smith"
                },
                {
                    title: "Dan's User Story",
                    status: "In Progress",
                    points: "3",
                    user: "Dan Nguyen"
                }
            ]
        }
    ]);

    return (
        <div className="boardContainer">
            {data.map((v, i) => {
                return <Lane
                    laneName={v.laneName}
                    laneItems={v.laneItems}
                />
            })}
        </div>
    )
}

export default Board;
