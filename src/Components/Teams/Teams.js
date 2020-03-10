import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from "@material-ui/core";
import { Grid } from '@material-ui/core';
import './HomeStyle.css';
import logoQuiz2 from '../images/logoQuiz2.png';
import { useHistory } from 'react-router-dom'

export const Teams = () => {
    let history = useHistory();

   const Submit = (e) => {
        e.preventDefault();
        history.push('/Levels');
    } 
    return <> 
        <Link href="/Teams">Jols</Link>
        <Grid className="container-menu" container direction="column" justify="space-between" alignItems="center">
            <img src={logoQuiz2} alt="logo" width="500px"></img>
            <TextField id="outlined-basic" label="Ingresa tu nombre" variant="outlined"/>
            <br/>
            <Button onClick={Submit} variant="outlined" >Jugar</Button>
            
        </Grid>
    
        </>
};