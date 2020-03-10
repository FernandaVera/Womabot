import React from 'react';
import './App.css';
import {Home} from './Components/Home/Home';
import Teams from './Components/Teams/Teams';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DenseAppBar from './Components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
    <DenseAppBar></DenseAppBar>
    <Switch>
    <Route path="/">
      <Home/>
      </Route>
    </Switch>
    <Switch>
    <Route path="/Teams">
      <Teams/>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
