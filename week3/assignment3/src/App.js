import React from "react"
import SquareColor from "./SquareColor"

class App extends React.Component{
  constructor(props){
      super(props)
      this.state= {
          squares: ["white","white","white","white"]
      }
  }

  toBlack=()=>{
    console.log("testing")
     if(this.state.squares[0] === "white"){
      console.log("testingx3")
    this.setState({
      squares: ["black","black","black","black"]
    })
  }else if(this.state.squares[0] === "black"){
    this.setState({
      squares: ["white","white","white","white"]
    })
  }
}

  render(){
    return(
    <div style={{display:'grid', gridTemplateColumns: "1fr 1fr"}}>
    {/* <div className="grid-container" > */}
      <SquareColor title="Tap This" backgroundColor={this.state.squares[0]}/>
      <SquareColor title="Tap This" backgroundColor={this.state.squares[1]}/>
      <SquareColor title="Tap This" backgroundColor={this.state.squares[2]}/>
      <SquareColor title="Tap This" backgroundColor={this.state.squares[3]}/>
      <button onClick={this.toBlack}>DJ only</button>
     
    </div>
  );
}
}

export default App;
