import React from 'react';
import './ChatStyle.css'
import Grid from '@material-ui/core/Grid';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export const ChatRoom = () => {
    
    return <> 
    <div className="main-chat">
    <div className="chat-room">
    <div className={"SendMessage"}>
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
            <InsertCommentIcon />
          </Grid>
          <Grid item>
            <TextField id="input"/>
          </Grid>
          <Button variant="contained" color="primary" component="span">
          Enviar
        </Button>
        </Grid>
      </div>
    </div>
    </div>
    
    </>
};

