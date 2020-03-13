import React from 'react';
import './LoginStyle.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import logoQuiz2 from '../images/logoQuiz2.png';

// import { useHistory } from 'react-router-dom'
//import {  GlobalContext } from './GlobalContextProvider';

export const LogIn = () => {
    // const {username, password} = React.useContext(GlobalContext);
    // const [userInput, setUser] = React.useState("");
    // const [passwordInput, setPassword] = React.useState("");

// const history = useHistory();

//    const Submit = (e) => {
//         e.preventDefault();
//         history.push('/About');


                // history.push('/About') (poner donde vas a pushear)
    return <> 
        <Grid className="container-menu" container direction="column" justify="space-between" alignItems="center">
            <img src={logoQuiz2} alt="logo" width="500px"></img>
            <TextField id="outlined-basic" label="Ingresa tu nombre" variant="outlined"/>
            <br/>
            <TextField id="outlined-basic" label="Ingresa tu contraseña" variant="outlined"/>
            <br/>
            <Button variant="outlined">Entrar</Button>
            
        </Grid>
    
        </>
};