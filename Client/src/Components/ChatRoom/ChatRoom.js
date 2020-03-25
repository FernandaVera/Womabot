import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./ChatStyle.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export const ChatRoom = () => {
  // const Message = props => {<p>{props.message}</p>};
  // const Message = props => {<p>{props}</p>};
  // const [conversation,setConversation] = useState("");
  // useEffect(() => {Message(conversation)},[conversation])

  const MessageQueueRenderer = ({ messageQueue }) => (
    <>
      {messageQueue.map(question => (
        <h5>{question} </h5>
      ))}
    </>
  );
  const [conversation, setConversation] = useState([]);
  const [userinput, setUserinput] = useState("");
  useEffect(() => {
   if (conversation.length > 0 && conversation[conversation.length-1] == userinput)
   {var keyword;
    switch (true) {
      case userinput.toUpperCase().includes("HOLA"):
        keyword = "HOLA";
        break;
      case userinput.toUpperCase().includes("CAUSA"):
        keyword = "CAUSA";
        break;
      case userinput.toUpperCase().includes("SINTOMAS"):
        keyword = "SINTOMAS";
        break;
      case userinput.toUpperCase().includes("PREVENCION"):
        keyword = "PREVENCION";
        break;
      case userinput.toUpperCase().includes("AUTOEXPLORACION"):
        keyword = "AUTOEXPLORACION";
        break;
      case userinput.toUpperCase().includes("MASTOGRAFIA"):
        keyword = "MASTOGRAFIA";
        break;
      case userinput.toUpperCase().includes("TRATAMIENTO"):
        keyword = "TRATAMIENTO";
        break;
      default:
        keyword = "error";
    }
    axios
      .get("http://localhost:9001/questions/find/" + keyword)
      .then(function(response) {
        updateConversation(response.data[0].answer);
        console.log(response.data[0].answer);
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }, [conversation]);

  function updateConversation(message) {
    setConversation([...conversation, message]);
  }

  const handleClick = () => {
    updateConversation(userinput);
  };

  return (
    <>
      <body className="main-chat">
        <div className="chat-room">
          <div className="sendMess">
            <MessageQueueRenderer messageQueue={conversation} />
            <TextField
              id="messageinput"
              value={userinput}
              onChange={({ target }) => setUserinput(target.value)}
              type="text"
              placeholder="Escribe tu pregunta aquí"
              variant="outlined"
            />
            <Button variant="contained" onClick={() => handleClick()}>
              {" "}
              Preguntar{" "}
            </Button>
          </div>
        </div>
      </body>
    </>
  );
};
