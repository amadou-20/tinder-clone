import React from "react";

import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';

import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header /> 
      <TinderCards />
      <SwipeButtons />

      <Router> 
        <Switch>
           <route path="/chat"><h1>we are going to chat</h1></route>
           <route path="/homepage"><h1>hello let's build a homepage</h1></route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;