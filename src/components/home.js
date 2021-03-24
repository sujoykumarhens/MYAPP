import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles,Typography } from '@material-ui/core';
import LaptopChromebookRoundedIcon from '@material-ui/icons/LaptopChromebookRounded';
import {BrowserRouter as Router,Link} from "react-router-dom";
const UseStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 600,
        padding: '140px',
        fontSize:'6vw',
        background: '#ADA996',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    },
    link:{
        textDecoration:'none',
    },
}));

export default function home() {
    const classes = UseStyles();
    return (
        <div>
            <CssBaseline />
            <Typography variant="h2" className={classes.title} component="h2">
                Transform your Library for the Digital Future<br/><br/>
            <Link to='/Signin' className={classes.link}>
             <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<LaptopChromebookRoundedIcon />}
            >
                Start now
            </Button>   
            </Link>
            </Typography>
        </div>
    );
}
