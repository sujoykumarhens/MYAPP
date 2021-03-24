import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const UseStyles = makeStyles((theme) => ({

}));

export default function home() {
    const classes = UseStyles();
    return (
        <div>
            <CssBaseline />
            <h1>Transform your Library for the Digital Future</h1>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
            Save
            </Button>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
            Save
            </Button>
        </div>
    );
}
