import React from "react"
import SquareColor from "./SquareColor"



class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      squares: ["white","white","white","white"]
    }
  }
  
  // small time dj black and white
  toBlack=()=>{
    // console.log("testing")
    if(this.state.squares[0] === "white" || this.state.squares[0] === "purple"){
      console.log("testing3")
      this.setState({
        squares: ["black","black","black","black"]
      })
    }else if(this.state.squares[0] === "black"){
      this.setState({
        squares: ["white","white","white","white"]
      })
    }else if(this.state.squares[0] === "purple")
    this.setState({
      squares: ["white", "white", "white"] 
    })
  }
   // to purple
  toPurple=()=>{
    if(this.state.squares[0]==="white" || this.state.squares[1]=== "black"){
      this.setState({
        squares: ["purple", "purple"]
      })
    }else if(this.state.squares[0] === "purple"){
      this.setState({
        squares: ["white", "white"]
      })
    }
  }
  // bottom right and left
  botLeft=()=>{
    if(this.state.squares[1] === "white" || this.state.squares[4] === "blue"){
      this.setState({
        squares: ["white", "white", "blue", "white"]
      })
    }
  }
  botRight=()=>{
    if(this.state.squares[1] === "white" || this.state.squares[2] === "black"){
      this.setState({
        squares: ["white", "white", "white", "blue"]
      })
    }
  }

  // linked buttons
/*   btn1=()=>{
    this.state.squares[0]
  } */

  render(){
    
      let boxGrid ={
        display:'grid',
        gridTemplateColumns: "1fr 1fr"
      }
    
    return(
      <div>
        <h1 id={"title"}><b>The Main Stage</b></h1>
        <hr/>
          <div style={boxGrid}>
            <SquareColor backgroundColor={this.state.squares[0]}/>
            <SquareColor backgroundColor={this.state.squares[1]}/>
            <SquareColor backgroundColor={this.state.squares[2]}/>
            <SquareColor backgroundColor={this.state.squares[3]}/>
          </div>
          <div id={"btn"}>
            <button style={{backgroundColor:"orange"}}onClick={this.toBlack}>DJ only</button> 
            <button style={{backgroundColor:"red"}}onClick={this.toPurple}>Purple Rain</button> 
            <button style={{backgroundColor:"green"}}onClick={this.botLeft}>pro Button</button>
            <button style={{backgroundColor:"pink"}}onClick={this.botRight}>pro Button</button>

          </div>
    </div>
  );
}
}

export default App;
