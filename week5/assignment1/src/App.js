import React from 'react'

import {Switch, Route} from "react-router-dom"

import Navbar from "./services/Navbar"
import Footer from './services/Footer'
import Home from './services/Home'
import About from './services/About'
import Contacts from './services/Contacts'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/About">
              <About />
          </Route>
          <Route exact path="/Contacts">
              <Contacts />
          </Route>
        </Switch>

      <Footer /> 
    </div>
  );
}

export default App;
