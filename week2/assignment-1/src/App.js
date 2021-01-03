import React from "react"

import './App.css';

import Repeat from "./Repeat.js";

function App() {
  return (
    <div className="app">
      <Repeat title="Blue box" subTitle=" wow that really blue!" information=" color of box" backgroundColor="Blue"/>
      <Repeat title="Red box" subTitle=" wow that really Red!" information=" color of box" backgroundColor="Red"/>
      <Repeat title="Orange box" subTitle=" wow that really Orange!" information=" color of box" backgroundColor="Orange"/>
      <Repeat title="Pink box" subTitle=" wow that really Pink!" information=" color of box" backgroundColor="Pink"/>
      <Repeat title="Brown box" subTitle=" wow that really Brown!" information=" color of box" backgroundColor="Brown"/>
      <Repeat title="Purple box" subTitle=" wow that really Purple!" information=" color of box" backgroundColor="Purple"/>
      <Repeat title="Green box" subTitle=" wow that really Green!" information=" color of box" backgroundColor="Green"/>
      <Repeat title="Grey box" subTitle=" wow that really Grey!" information=" color of box" backgroundColor="Grey"/>
      <Repeat title="Teal box" subTitle=" wow that really Teal!" information=" color of box" backgroundColor="Teal"/>
      <Repeat title="Yellow box" subTitle=" wow that really Yellow!" information=" color of box" backgroundColor="Yellow"/>
    
    </div>
  );
}

export default App;
