import React from 'react';
import './navbar.scss';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {MenuIcon} from '@material-ui/icons';


function Header() {
    return (
        <AppBar position="sticky" color="secondary" >
          <Toolbar className="navbarContent">
            <Typography variant="h6" >
                Another Jira Clone
            </Typography>
            <Button color="inherit">Create</Button>
          </Toolbar>
        </AppBar>
    )
}

export default Header;
