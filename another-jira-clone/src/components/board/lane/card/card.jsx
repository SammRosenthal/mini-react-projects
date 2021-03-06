import React from "react";
import "./card.scss";
import { Card as MuiCard, CardContent, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "5px 0",
    fontSize: "14px",
    maxHeight: "175px",
    minHeight: "175px",
    width: "90%",
    background: "white",
    borderRadius: 2,
    boxShadow: "0 1px 2px 0 rgba(9,30,66,.25)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  pos: {
    marginBottom: 12,
  },
  cardInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function Card(props) {
  const classes = useStyles();
  return (
    <MuiCard className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography
            className={classes.delete}
            onClick={function () {
              props.deleteCard(props.id, props.status);
            }}
          >
            <DeleteIcon />
          </Typography>
        </div>
        <Typography>{props.status}</Typography>

        <div className={classes.cardInfo}>
          <Typography className={classes.pos}>{props.assignee}</Typography>
          <Typography className={classes.pos}>{props.points}</Typography>
        </div>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
