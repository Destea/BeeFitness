import { Link, NavLink } from "react-router-dom"
import { links } from "../data"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import "./navbar.css"
import Logo from "../images/logo.png"
import { useState } from "react"


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import { Button } from '@mui/material';

export default function Navbar() {
  const [user,setUser] = React.useState('')
  const [authhook, setAuthhook] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(()=>{
    try{
      onAuthStateChanged(auth ,(currentuser)=>{
        setUser(currentuser)
        if(currentuser==null){
          setAuthhook(false)
        }else{setAuthhook(true)}
      })
      
    }catch(error){console.log(error.message)}
  },[])
  

  const handleChange = (event) => {
    setAuthhook(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout=async()=>{
    try{
      await signOut(auth)
      setAnchorEl(null)
    }catch(err){console.log(err)}
  }

  return (
    <nav>
    <div className="container navtocontainer">
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            
          <img src={Logo} alt="Nav Logo" />
        
          </IconButton>

        {authhook==true?
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>{user.email}</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handlelogout}>Logout</MenuItem>
              </Menu>
            </div>
          :<div>
            
            <Button variant="outlined" sx={{bgcolor:'white'}}><Link to={'/login'}>Log in</Link></Button>
            <Button variant="outlined" sx={{bgcolor:'white'}}><Link to={'/signup'}>Sign Up</Link></Button>
          </div>}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </nav>
  );
}
    
          
  
       
