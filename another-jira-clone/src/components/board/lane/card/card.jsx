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
                <h1>{title}</h1>
            </div>
            <div className="cardStatus">
                <h3>{status}</h3>
            </div>
            <div className="cardInfo">
                <h5>{user}</h5>
                <h5>{points}</h5>
            </div>
        </div>
    )
}

export default Card;
