import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import WBlogo from '../images/WBlogoBlanco.png';
import Link from '@material-ui/core/Link';
import './Navbar.css';



export default function Appbar() {

  return (
    <div>
  <AppBar position="static">
    <Toolbar className={"myclass"}>
      <Link href="/">
      <IconButton edge="start" color="inherit" aria-label="menu">
      <img src={WBlogo} alt="logo" width="100px"></img>
      </IconButton>
      </Link>
    </Toolbar>
  </AppBar>
    </div>
  );
}