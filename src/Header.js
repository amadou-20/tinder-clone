import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom";



function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="Header">
     {backButton ? ( 
       <IconButton onClick={() => history.replace(backButton)}>
         <ArrowBackIosIcon fontSize="large" className="header_icon" />
       </IconButton>
     ) : ( 
      
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large"/> 
        </IconButton>
     )}

      <Link to="/">
          <img  className="tinder-logo" 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
            alt="logo de tinder"
          />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large"/>
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
