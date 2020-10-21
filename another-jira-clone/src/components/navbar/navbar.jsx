import React, { useState } from "react";
import "./navbar.scss";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuIcon } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  center: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: "50vh",
    width: "75vw",
    backgroundColor: "#f4f5f7",
    borderRadius: "1%",
    border: "2px solid black",
    outline: "none"
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
      <h2 id="modal-title">Card Information</h2>
      <p id="modal-description">this is the body</p>
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
