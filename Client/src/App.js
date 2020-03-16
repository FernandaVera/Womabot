import React, { Component } from 'react';
import './App.css';
import { LogIn } from '././Components/LogIn/LogIn';
import { ChatRoom } from '././Components/ChatRoom/ChatRoom';
import Appbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render (){ 
    return(  
    <>
    <BrowserRouter>
    <Appbar/>
    <Switch>

    <Route path="/">
      <LogIn/>
      </Route>

    <Route path='/Disclaimer'>
    </Route>

    <Route path='/Chat'>
      <ChatRoom/>
    </Route>

    </Switch>
  </BrowserRouter>
  </>
  );
};
};
export default App;
