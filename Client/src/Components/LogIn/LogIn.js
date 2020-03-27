import React from 'react';
import './LoginStyle.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import WBlogo from '../images/WBlogo.png';
import Link from '@material-ui/core/Link';

export const LogIn = () => {

    return <> 
    <div className="container-menu">
        <Grid container direction="column" justify="space-between" alignItems="center">
            <br/>
            <img src={WBlogo} alt="logo" width="500px"></img>
            <br/>
            <TextField id="outlined-basic" label="Your name / Tu nombre" variant="outlined"/>
            <p className="idiom"> Choose your language / Selecciona tu idioma</p>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" className="ButtonLogin">
        <Button variant="contained"  color ="secondary"> <Link href="/Disclaimer"> English </Link></Button>
        <br/>
        <Button variant="contained"  color ="secondary"> <Link href="/DisclaimerEsp"> Español </Link></Button>
        </Grid>
        </div>
        </>
};