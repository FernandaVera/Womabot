import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './ChatStyle.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export const ChatRoom = () => {
const Message = props => props.data.map(message => <p>{message.question}</p>);
const conversation = [];
const [data, setData] = useState(conversation);

const MessageQueueRenderer = ({ messageQueue }) => (
  <>
      {
          messageQueue.map((message) =>
              < h5 >{message} </h5>
          )
      }
  </>
);
const handleClick = () => {

  const question = document.getElementById("messageinput").value.toUpperCase();
  
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
    
    axios.get("http://localhost:9001/questions/find/" + keyword)
    .then
    (function(response)

    { this.setState({conversation:response.data.answer})
      (response.data[0].answer)
    
    }) 
    .catch(function(err){(err)})
  
  };

  return ( 
  <>
    <body className="main-chat">
      <div className="chat-room">
        <div className="sendMess">

      <Message onClick={MessageQueueRenderer} data={data} />
        <TextField id="messageinput" type="text" placeholder="Escribe tu pregunta aquí" variant="outlined" />
          <Button variant="contained" onClick={() => handleClick()}> Enviar </Button>
      
        </div>
      </div>
    </body>
    </>
  );
};