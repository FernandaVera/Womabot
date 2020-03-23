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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Womabot es chatbot programado para resolver tus dudas acerca del cáncer de mama. `;
const message2 = `Los contenidos de este chatbot se han redactado solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. `;
const message3 = `Recuerda que tu salud es primordial y debes hacerte chequeos temporalmente `;

export default function Disclaimer() {
  const classes = useStyles();

  return (
    <div className={"main-container"}>
        <h1 className={"classTitle"}>¿Por qué Womabot?</h1>
              <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <LiveHelpIcon/>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <AddAlertIcon/>
          </Grid>
          <Grid item xs>
            <Typography>{message2}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
           <EventIcon/>
          </Grid>
          <Grid item xs>
            <Typography>{message3}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}