import React from 'react';
import { useState, useEffect } from 'react';
import produce from 'immer';
import './ChatStyle.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Chat
export const ChatRoom = () => {
const Message = props => props.data.map(message => <div className="mess">{message.question}</div>);
const conversation = [];
const [data, setData] = useState(conversation);

  const handleClick = () => {
    const question = document.querySelector('#messageinput').value.trim();
    //aquí debería ir otra variable de mensaje de la app que obtenga el elemento respuesta
    if (question) {
      const nextState = produce(data, draftState => {
        draftState.push({question});
      })
      document.querySelector('#messageinput').value = '';

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('data', JSON.stringify(nextState))
      }

      setData(nextState);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = sessionStorage.getItem('data')

      if (getData !== '' && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);

  return ( 
  <>
    <body className="main-chat">
      <div className="chat-room">
      <div className="sendMess">
      <Message data={data} />
      <TextField id="messageinput" type="text" placeholder="Escribe aquí" variant="outlined" />
      <Button variant="contained" onClick={() => handleClick()}>Enviar</Button>
      </div>
      </div>
    </body>
    </>
  );
};