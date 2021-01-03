import React from "react"

import "./index.css"

import Header from "./components/Header"
import Bloglist from "./components/BlogList"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Header/>
      <Bloglist/>
      <Footer/>
    </div>
  )
};

export default App;
