import React from 'react'
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      num1: "",
      num2: "",
      result: "",
    }
  }

  handleChange = (e) => {
    const { name, value} = e.target
      this.setState({
      [name]: Number(value)
    })
  }

  handleClick = (e) => {
    this.setState({
      result: e.target.id
    })
  }

  getNum = () => {
    let num1 = this.state.num1
    let num2 = this.state.num2
    let input = this.state.result
    
    if(this.state.result === "add"){
      return `${num1} + ${num2} = ${num1 + num2}`;
    }else if (input === "sub"){
      return `${num1} - ${num2} = ${num1 - num2}`
    }else if (input === "mul"){
      return `${num1} * ${num2} = ${num1 * num2}`
    }else if (input === "div"){
      return `${num1} / ${num2} = ${num1 / num2}`

    }
    


  }

  render(){
    return (
      
    <div className="App">
      <div>
          <h1 style={{
            fontSize: '30',
            border: '1px solid black',
            borderRadius: '25px',
            marginRight: '40%',
            marginLeft: '40%',
            backgroundColor:'orange'
                      }}>Calculate</h1>
              <input  style={{textAlign: 'center'}}
              type="number" 
              placeholder="Input number here"
              value={this.state.num1}
              name="num1"
              onChange={this.handleChange}/>

              <input style={{textAlign: 'center'}}
              type="number" 
              placeholder="Input number here"
              value={this.state.num2}
              name="num2"
              onChange={this.handleChange}/>
      </div>
       
        <button id="add" onClick={this.handleClick}>  + </button>  
        <button id="sub" onClick={this.handleClick}>  - </button>
        <button id="mul" onClick={this.handleClick}>  * </button>
        <button id="div" onClick={this.handleClick}>  / </button>

        <h1 style={{
          fontSize: "25",
          }}>{
          this.state.result === "add" ||
          this.state.result === "sub" ||
          this.state.result === "mul" ||
          this.state.result === "div" ?
          this.getNum():
          console.log("error")
          }
        </h1>


       
    </div>
  )}
}

export default App;
