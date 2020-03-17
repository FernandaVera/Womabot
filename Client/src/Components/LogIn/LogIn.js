import React from 'react';
import './LoginStyle.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import WBlogo from '../images/WBlogo.png';
import {  GlobalContext } from './GlobalContextProvider';
import { useHistory } from 'react-router-dom';

export const LogIn = () => {
    const {username, password} = React.useContext(GlobalContext);
    const [userInput, setUser] = React.useState("");
    const [passwordInput, setPassword] = React.useState("");

   const history = useHistory();

    // const Submit = (e) => {
    // e.preventDefault();
    // history.push('/Disclaimer')

    return <> 
        <div className="container-menu">
        <Grid container direction="column" justify="space-between" alignItems="center">
            <br/>
            <img src={WBlogo} alt="logo" width="500px"></img>
            <br/>
            <TextField id="outlined-basic" label="Ingresa tu nombre" onChange={(e) => setUser(e.target.value)} variant="outlined"/>
            <br/>
            <TextField id="outlined-basic" label="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)} variant="outlined"/>
            <br/>
            <Button className="boton-entrar" variant="outlined" color="primary" 
        onClick={() => {if(username === userInput && password === passwordInput){
            history.push('/Disclaimer');
             }else{
            console.log("Acceso denegado");
    }}}>Entrar</Button>
            
        </Grid>
        </div>
    
        </>
};