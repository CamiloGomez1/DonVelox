import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import firebase from './Firebase'
import { useState } from 'react';
import "firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bb from './Botonesb'
import Form from './Form'
import Leer from './Leer'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
var provider = new firebase.auth.GoogleAuthProvider();

export default function ButtonAppBar() {

  const classes = useStyles();
  const [usuario, setUsuario]= useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const LoginGoogle=()=>{
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setUsuario(user)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  return (
    <div className={classes.root}>
<Router>

      <AppBar position="static">
        <Toolbar>
       
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
            <MenuIcon />
          </IconButton>
    
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem><Link to= "/">Inicio</Link></MenuItem>
            <MenuItem> <Link to="/Registrar">Registrar</Link></MenuItem>
            <MenuItem><Link to="/Leer">Ver Lista</Link></MenuItem>
            <MenuItem onClick={LoginGoogle}>Login</MenuItem>
          </Menu>
          
        
         
         
          <Typography variant="h6" className={classes.title}>
            DonVelox
          </Typography>
         
        
          <Avatar src={usuario.photoURL} />
       

        </Toolbar>
      </AppBar>

      
      <Switch>
      <Route exact path="/">
        <Bb/>
      </Route>

      <Route path="/Registrar">
          <Form/>
          </Route>
        

<Route path="/Leer">
    <Leer/>
    </Route>

          </Switch>
          </Router>
         
    </div>
  );
}

