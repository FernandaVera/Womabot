import React from 'react';

import './DisclaimerStyle.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
export default function Disclaimer() {
  return (
    <div className={"main-container"}>
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <h1 className={"classTitle"}> ¡Hello Fernanda!</h1>
        <div className="card-dis">
        <p>Womabot is a chatbot programmed to answer your questions about breast cancer. The contents of this chatbot have been written for informational purposes only.  At no time can they serve to facilitate diagnoses or replace the work of a professional. Remember that your health is paramount and you should write checks regularly.</p>
        </div>
        <br/>
        <Button variant="contained" color ="secondary"><Link href="/Chat"> Got it! </Link></Button>         
    </Grid>
    </div>
  );
}