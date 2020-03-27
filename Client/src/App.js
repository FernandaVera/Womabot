import React, { Component } from 'react';
import './App.css';
import { LogIn } from '././Components/LogIn/LogIn';
import { ChatRoom } from '././Components/ChatRoom/ChatRoom';
import Appbar from './Components/Navbar/Navbar';
import Disclaimer from './Components/Disclaimer/Disclaimer';
import DisclaimerEsp from './Components/Disclaimer/DisclaimerEsp'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom";



class App extends Component {
  render (){ 
    return(  
    <>
    <BrowserRouter>
    <Appbar/>
    
    <Switch>

    <Route path='/Disclaimer'>
    <Disclaimer/>
    </Route>

    <Route path='/DisclaimerEsp'>
    <DisclaimerEsp/>
    </Route>

    <Route path='/Chat'>
      <ChatRoom/>
    </Route>

    <Route path="/">
      <LogIn/>
      </Route>

    </Switch>
    <Footer/>
  </BrowserRouter>
  </>
  );
};
};
export default App;
