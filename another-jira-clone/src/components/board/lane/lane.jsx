import React, {useState} from 'react';
import Card from './card/card.jsx';
import './lane.scss';

function Lane(props) {
    const [title, setTitle] = useState("TO DO");
        
    return (
        <div className="laneContainer">
            <div className="laneTitle">
                <p>{props.laneName}</p>
            </div>
            {props.laneItems.map((v, i) => {
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
