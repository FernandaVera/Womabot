import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BgImage from '../images/fondoApp3.png';

import './HomeStyle.css';

import logoQuiz2 from '../images/logoQuiz2.png';

class Home extends Component {
    render (){
        return <> <div styles={{ backgroundImage:`(${BgImage})`, backgroundSize:'cover'}}>
        <Grid className="container-menu" container direction="column" justify="space-between" alignItems="center">
            <img src={logoQuiz2} alt="logo" width="500px"></img>
            <TextField id="outlined-basic" label="Ingresa tu nombre" variant="outlined"/>
            <br/>
            <Button variant="outlined">Jugar</Button>
        </Grid>
        </div>
        </>
    }
}

export default Home