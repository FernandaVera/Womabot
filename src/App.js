import React from 'react';
import './App.css';
import {LogIn} from '././Components/LogIn/LogIn'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/">
      <LogIn/>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
