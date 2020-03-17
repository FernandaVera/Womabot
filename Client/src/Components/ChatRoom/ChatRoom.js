import React from 'react';
import './ChatStyle.css'
import Grid from '@material-ui/core/Grid';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
export const ChatRoom = () => {
    
    return <> 
    <body className="main-chat">
    <div className="chat-room">
    <div className="sendMess">
    <TextField id="outlined-basic" label="Escribe aquí" variant="outlined" />
    <Button variant="contained">Enviar</Button>
    </div>
    </div>
    </body>
    
    </>
};

