import React, {useState} from 'react';
import Card from './card/card.jsx';
import './lane.scss';

function Lane(props) {
    const [title, setTitle] = useState("TO DO");
    const [cards, setCards] = useState([
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
        
    ]);

    return (
        <div className="laneContainer">
            <div className="laneTitle">
                <p>{title}</p>
            </div>
            {cards.map((v, i) => {
                return <Card 
                    // key and id will be a unique identifier for each card
                    key={i}
                    id={i}
                    title={v.title}
                    status={v.status}
                    points={v.points}
                    user={v.user}
                />
            })}
        </div>
    )
}


export default Lane;
