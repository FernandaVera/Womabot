import React, { Component } from 'react';
import './App.css';
import {LogIn} from '././Components/LogIn/LogIn'
import Appbar from './Components/Navbar/Navbar'
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
    </Switch>
  </BrowserRouter>
  </>
  );
};
};
export default App;
