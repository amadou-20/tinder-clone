import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';


function Header() {

  return (
    <div className="Header">

        <PersonIcon />
        <img  className="tinder-logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=" "/>
        <ChatIcon />
    </div>
  );
}

export default Header;
