import React, {useState} from 'react';
import './card.scss';

// core features
    // story name
    // story points
    // story status
    // assigned user

function Card(props) {
    const [title, setTitle] = useState("Sam's User Story");
    const [status, setStatus] = useState("In Progress");
    const [points, setPoints] = useState("3");
    const [user, setUser] = useState("Sam Rosenthal");

    return(
        <div className="cardContainer">
            <div className="cardHeader">
                {title}
            </div>
            <div className="cardStatus">
                {status}
            </div>
            <div className="cardInfo">
                {user}
                {points}
            </div>
        </div>
    )
}

export default Card;
