import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DenseAppBar from './Components/NavBar/NavBar';
//import Wrapper from '../src/Components/Wrapper/Wrapper'

function App() {
  return (
    //<Wrapper>
    <BrowserRouter>
    <DenseAppBar></DenseAppBar>
    <Switch>
    <Route path="/"component={Home}/>
    </Switch>
  </BrowserRouter>
  //</Wrapper>
  );
}

export default App;
