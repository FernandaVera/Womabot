import React from 'react';

import './DisclaimerStyle.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
export default function DisclaimerEsp() {
  return (
    <div className={"main-container"}>
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <h1 className={"classTitle"}> ¡Hola Fernanda!</h1>
        <div className="card-dis">
        <p>Womabot es chatbot programado para resolver tus dudas acerca del cáncer de mama.Los contenidos de este chatbot se han redactado solo con fines informativos. 
          En ningún momento pueden servir para facilitar diagnósticos o 
          sustituir la labor de un profesional.
          Recuerda que tu salud es primordial y debes hacerte chequeos temporalmente.</p>
        </div>
        <br/>
        <Button variant="contained" color = "secondary"><Link href="/Chat"> ¡Entendido! </Link></Button>         
    </Grid>
    </div>
  );
}