import React, {useState} from 'react';
import Card from './card/card.jsx';

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
            <div>
                {title}
            </div>
            {cards.map((v, i) => {
                return <Card 
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
