import React from 'react';
import { useState, useEffect } from 'react';
import produce from 'immer';
import axios from 'axios';

import './ChatStyle.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Chat
export const ChatRoom = () => {
const Message = props => props.data.map(message => <div>{message.question}</div>);
const conversation = [];
const [data, setData] = useState(conversation);
  const handleClick = () => {
    const question = document.querySelector('#messageinput').value.toUpperCase();
  
    var keyword;
    if (question.includes("HOLA")){
      keyword = "HOLA"
    } else if (question.includes("CAUSA")){
      keyword = "CAUSA"
    } else if (question.includes("SINTOMAS")){
      keyword = "SINTOMAS"
    } else if (question.includes("PREVENCION")){
      keyword = "PREVENCION"
    } else if (question.includes("AUTOEXPLORACION")){
      keyword = "AUTOEXPLORACION"
    } else if (question.includes("MASTOGRAFIA")){
      keyword = "MASTOGRAFIA"
    } else if (question.includes("TRATAMIENTO")){
      keyword = "TRATAMIENTO"
    } else {
      keyword = "ERROR"
    }
    //todos los casos
    //agregarle caso "en caso de que no (general)"

    //ARREGLAR TODO ESTE COCHINERO

    axios.get("http://localhost:9001/questions/find/" + keyword)
    .then(function(response){console.log(response.data[0].answer)}) // guardarlo en un state que me lo guarde en un div
    .catch(function(err){console.log(err)})
  
  };

  return ( 
  <>
    <body className="main-chat">
      <div className="chat-room">
        <div className="sendMess">

      <Message data={data} />
        <TextField id="messageinput" type="text" placeholder="Escribe aquí" variant="outlined" />
          <Button variant="contained" onClick={() => handleClick()}> Enviar </Button>
      
        </div>
      </div>
    </body>
    </>
  );
};