import React, { useState } from "react";
import "./navbar.scss";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: "80vh",
    width: "800px",
    backgroundColor: "#f4f5f7",
    borderRadius: ".5%",
    border: "2px solid black",
    outline: "none",
    padding: "0 32px"
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
  textBox: {
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className={classes.center}>
      <div id="cardCreationHeader"><h1>Create Card</h1></div>
      <div id="cardGeneralInformation" className={classes.cardGeneralInformation}>
        <TextField id="assignee" label="Assignee" />
        <TextField id="points" label="Story Points" />
        <TextField id="status" label="Status" />
      </div>
      <div id="cardContent" className={classes.cardContent}>
        <TextField
          multiline
          rows={10}
          variant="outlined"
          id="acceptanceCriteria"
          label="Acceptance Criteria"
          className={classes.textBox}
        />
        <TextField
          multiline
          rows={10}
          variant="outlined"
          id="description"
          label="Description"
          className={classes.textBox}
        />
      </div>
      <div id="cardCreationFooter" className={classes.footer}>
        <Button variant="contained" color="primary">Create</Button>
      </div>
    </div>
  );

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar className="navbarContent">
        <Typography variant="h6">Another Jira Clone</Typography>
        <Button onClick={handleOpen} color="inherit">
          Create
        </Button>
      </Toolbar>
      <Modal open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </AppBar>
  );
}

export default Header;
