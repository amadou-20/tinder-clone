import React from "react";

import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';

import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>  
        <Switch>
           <Route path="/chat">
             <Header backButton="/" />
             <h1>we are going to chat</h1>
           </Route>
           <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
           </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;