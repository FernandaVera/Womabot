import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
      <Button edge="end"color="inherit"><Link href="/Disclaimer">Sobre Womabot </Link></Button>
      <Button edge="end"color="inherit"> <Link href="/Chat">Chat </Link></Button>
    </Toolbar>
  </AppBar>
    </div>
  );
}