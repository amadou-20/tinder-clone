import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from "@material-ui/core/IconButton";


function Header(){

  return (
    <div className="Header">

        <IconButton> <PersonIcon className="header_icon" fontSize="large"/> </IconButton>

            <img  className="tinder-logo" 
              src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
              alt="logo de tinder"
            /> 
           <IconButton><ChatIcon className="header_icon" fontSize="large"/> </IconButton>
   
    </div>
  );
}


export default Header;
