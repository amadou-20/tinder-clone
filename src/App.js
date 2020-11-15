import React from "react";
import Header from './Header';
import TinderCards from "./TinderCards";
import './App.css';
import firebase from ".firebase";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Header /> 
      <TinderCards />
      <Router> 
        <Switch>
           <route path="/chat"><h1>we are going a chat</h1></route>
           <route path="/homepage"><h1>hello let's build a homepage</h1></route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
