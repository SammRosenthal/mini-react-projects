import React, { useState } from "react";
import "./navbar.scss";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuIcon } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyles() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%;)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header() {
  const classes = useStyles();
  const [modalStyle, getModalStyle] = useState(getModalStyles);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="modal-title">Card Information</h2>
      <p id="modal-description">this is the body</p>
      <Header />
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
        <h1>test</h1>
      </Modal>
    </AppBar>
  );
}

export default Header;
