import React, { useState } from "react";
import "./navbar.scss";
import { AppBar, Toolbar, Typography, Button, Select, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    height: "80vh",
    width: "800px",
    backgroundColor: "#f4f5f7",
    borderRadius: ".5%",
    border: "2px solid black",
    outline: "none",
    padding: "18px 32px"
  },
  cardGeneralInformation: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "732px",
    height: "500px"
  },
  dropDown: {
    width: 182
  },
  textBox: {
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [assignee, setAssignee] = useState("");
  const [points, setPoints] = useState("");
  const [acceptanceCriteria, setAcceptranceCriteria] = useState("");
  const [description, setDescription] = useState("");

  const handleModalToggle = () => {
    setAssignee("")
    setPoints("")
    setStatus("")
    setDescription("")
    setAcceptranceCriteria("")
    setOpen(!open);
  };

  const handleAssignee = (event) => {
    setAssignee(event.target.value);
  }

  const handlePoints = (event) => {
    setPoints(event.target.value);
  }

  const handleDropDown = (event) => {
    setStatus(event.target.value);
  }

  const handleDescription = event => {
    setDescription(event.target.value);
  }

  const handleAcceptranceCriteria = event => {
    setAcceptranceCriteria(event.target.value);
  }

  const modalBody = (
    <div className={classes.center}>
      <div id="cardCreationHeader"><h1>Create Card</h1></div>
      <div id="cardGeneralInformation" className={classes.cardGeneralInformation}>
        <TextField id="assignee" label="Assignee" onChange={handleAssignee} value={assignee} />
        <TextField id="points" label="Story Points" onChange={handlePoints} value={points} />
        <FormControl className={classes.dropDown}>
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log('hello')
            props.addCard({status, assignee, points, acceptanceCriteria, description});
            handleModalToggle();
          }}
         >Create</Button>
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
