import React, {useState} from 'react';
import Card from './card/card.jsx';
import './lane.scss';
import {Typography, Toolbar} from '@material-ui/core';

function Lane(props) {
    const [title, setTitle] = useState("TO DO");
        
    return (
        <div className="laneContainer">
            <Toolbar className="laneTitle" color="secondary">
                <Typography 
                    variant='subtitle1' 
                    align='justify' 
                    color='initial'
                >
                    {props.laneName}
                </Typography>
            </Toolbar>
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
