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

// const MessageQueueRenderer = ({ messageQueue }) => (
//   <>
//       {
//           messageQueue.map((message) =>
//               < h5 >{message} </h5>
//           )
//       }
//   </>
// );
const handleClick = () => {

  const question = document.getElementById("messageinput").value.toUpperCase();
  
    var keyword;
    switch(true) {
      case question.includes('HOLA'):
        keyword = 'HOLA'
          break
        case question.includes('CAUSA'):
        keyword = 'CAUSA'
          break
        case question.includes('SINTOMAS'):
        keyword = 'SINTOMAS'
          break
        case question.includes('PREVENCION'):
        keyword = 'PREVENCION'
          break
        case question.includes('AUTOEXPLORACION'):
        keyword = 'AUTOEXPLORACION'
          break
        case question.includes('MASTOGRAFIA'):
        keyword = 'MASTOGRAFIA'
            break
        case question.includes('TRATAMIENTO'):
        keyword = 'TRATAMIENTO'
            break
        default:
          keyword = "error"
    };
    
    axios.get("http://localhost:9001/questions/find/" + keyword)
    .then(function(response){console.log(response.data[0].answer)}) // guardarlo en un state que me lo guarde en un div
    .catch(function(err){console.log(err)})
    // .then
    // (function(response)

    // { this.setState({conversation:response.data.answer})
    //   (response.data[0].answer)
    
    // }) 
    // .catch(function(err){(err)})
  
  };

  return ( 
  <>
    <body className="main-chat">
      <div className="chat-room">
        <div className="sendMess">

      <Message data={data} />
        <TextField id="messageinput" type="text" placeholder="Escribe tu pregunta aquí" variant="outlined" />
          <Button variant="contained" onClick={() => handleClick()}> Enviar </Button>
      
        </div>
      </div>
    </body>
    </>
  );
};