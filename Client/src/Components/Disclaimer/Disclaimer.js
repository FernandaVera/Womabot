//export const Diclaimer = () => {
//    return <> 
    
//       </>
//};

import React from 'react';

import './DisclaimerStyle.css';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     overflow: 'hidden',
//     padding: theme.spacing(0, 3)
//   },
//   paper: {
//     maxWidth: 400,
//     margin: `${theme.spacing(1)}px auto`,
//     padding: theme.spacing(2),
//   },
// }));
export default function Disclaimer() {
  return (
    <div className={"main-container"}>
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <h1 className={"classTitle"}>¿Qué es Womabot?</h1>
        <div className="card-dis">
        <p>Womabot es chatbot programado para resolver tus dudas acerca del cáncer de mama.</p>
        </div>
        <br/>
        <div className="card-dis">
        <p>Los contenidos de este chatbot se han redactado solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional.</p>
        </div>
        <br/>
        <div className="card-dis">
        <p>Recuerda que tu salud es primordial y debes hacerte chequeos temporalmente.</p>
        </div>
        <br/>
        <Button variant="contained"><Link href="/Chat"> Entendido </Link></Button>         
    </Grid>
    </div>
  );
}