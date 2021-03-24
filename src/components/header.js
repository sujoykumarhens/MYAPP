import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const UseStyle = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  titleLink: {
    textDecoration: 'none',
    color: 'white',
  },
  Button: {
    backgroundColor: 'rgba(255,255,255,.2)',
    flexGrow: 0,
    color: 'white',
    textDecoration: 'none',
  }
}));
const token = window.localStorage.getItem("token")
  if (token == 'jjj') {
    alert(token);
  }


export default function ButtonAppBar() {
  const classes = UseStyle();

  



  return (
    <div>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title} >
            <Link to='/' className={classes.titleLink}>
              <LocalLibraryRoundedIcon /> e-Library
            </Link>
          </Typography>
          <Link to='/signin' className={classes.Button}>
            <Button color="inherit" >
              <AccountCircleIcon /> Login
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
