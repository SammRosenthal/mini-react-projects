import React from "react";
import Card from "./card/card.jsx";
import "./lane.scss";
import { Typography, Toolbar } from "@material-ui/core";

function Lane(props) {
  return (
    <div className="laneContainer">
      <Toolbar className="laneTitle" color="secondary">
        <Typography variant="subtitle1" align="justify" color="initial">
          {props.laneName}
        </Typography>
      </Toolbar>
      {props.cards.map((v, i) => {
        return (
          <Card
            // key and id will be a unique identifier for each card
            key={v.id}
            id={v.id}
            title={v.title}
            status={v.status}
            points={v.points}
            assignee={v.assignee}
            deleteCard={props.deleteCard}
          />
        );
      })}
    </div>
  );
}

export default Lane;
