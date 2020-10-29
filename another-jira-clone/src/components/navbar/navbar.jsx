import React, { useState } from "react";
import "./navbar.scss";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Modal from "@material-ui/core/Modal";
import uniqid from "uniqid";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: "0px",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexFlow: "column wrap",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    minHeight: "85vh",
    maxHeight: "95vh",
    width: "800px",
    backgroundColor: "#f4f5f7",
    borderRadius: ".5%",
    border: "2px solid black",
    outline: "none",
    padding: "18px 32px",
  },
  cardGeneralInformation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "12vh",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardStats: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "732px",
    height: "500px",
  },
  smallForms: {
    width: 182,
  },
  textBox: {
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Header(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [assignee, setAssignee] = useState("");
  const [points, setPoints] = useState("");
  const [acceptanceCriteria, setAcceptranceCriteria] = useState("");
  const [description, setDescription] = useState("");

  const handleModalToggle = () => {
    setAssignee("");
    setTitle("");
    setPoints("");
    setStatus("");
    setDescription("");
    setAcceptranceCriteria("");
    setOpen(!open);
  };
  const createCard = () => {
    const newCard = {
      id: uniqid(),
      status,
      assignee,
      points,
      acceptanceCriteria,
      description,
      title,
    };
    handleModalToggle();
    props.addCard(newCard);
  };
  const handleAssignee = (event) => {
    setAssignee(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handlePoints = (event) => {
    setPoints(event.target.value);
  };
  const handleDropDown = (event) => {
    setStatus(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleAcceptranceCriteria = (event) => {
    setAcceptranceCriteria(event.target.value);
  };

  const modalBody = (
    <div className={classes.center}>
      <div id="cardCreationHeader" className={classes.header}>
        <h1>Create Card</h1>
      </div>
      <div
        id="cardGeneralInformation"
        className={classes.cardGeneralInformation}
      >
        <div id="cardHeader" className={classes.cardHeader}>
          <TextField
            className={classes.smallForms}
            id="title"
            label="Title"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div id="cardStats" className={classes.cardStats}>
          <TextField
            className={classes.smallForms}
            id="assignee"
            label="Assignee"
            onChange={handleAssignee}
            value={assignee}
          />
          <TextField
            className={classes.smallForms}
            id="points"
            label="Story Points"
            onChange={handlePoints}
            value={points}
          />
          <FormControl className={classes.smallForms}>
            <InputLabel id="card-status">Status</InputLabel>
            <Select
              labelId="card-status"
              id="card-status-select"
              value={status}
              onChange={handleDropDown}
            >
              <MenuItem value={"To Do"}>TO DO</MenuItem>
              <MenuItem value={"In Progress"}>IN PROGRESS</MenuItem>
              <MenuItem value={"In Test"}>IN TEST</MenuItem>
              <MenuItem value={"Done"}>DONE</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div id="cardContent" className={classes.cardContent}>
        <TextField
          multiline
          rows={10}
          variant="outlined"
          id="acceptanceCriteria"
          label="Acceptance Criteria"
          className={classes.textBox}
          value={acceptanceCriteria}
          onChange={handleAcceptranceCriteria}
        />
        <TextField
          multiline
          rows={10}
          variant="outlined"
          id="description"
          label="Description"
          className={classes.textBox}
          value={description}
          onChange={handleDescription}
        />
      </div>
      <div id="cardCreationFooter" className={classes.footer}>
        <Button variant="contained" color="primary" onClick={createCard}>
          Create
        </Button>
      </div>
    </div>
  );

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar className="navbarContent">
        <Typography variant="h6">Another Jira Clone</Typography>
        <Button onClick={handleModalToggle} color="inherit">
          Create
        </Button>
      </Toolbar>
      <Modal open={open} onClose={handleModalToggle}>
        {modalBody}
      </Modal>
    </AppBar>
  );
}

export default Header;
