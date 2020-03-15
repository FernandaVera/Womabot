import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import WBlogo from '../images/WBlogo.png';
import './Navbar.css';



export default function Appbar() {

  return (
    <div className={"myclass"}>
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={"hola2"} color="inherit" aria-label="menu">
      <img src={WBlogo} alt="logo" width="100px"></img>
      </IconButton>
      <Button edge="end"color="inherit">Sobre Womabot</Button>
      <Button edge="end"color="inherit">Sobre Womabot</Button>
    </Toolbar>
  </AppBar>
    </div>
  );
}