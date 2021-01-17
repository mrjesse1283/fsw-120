import React, {Component} from "react"

import "./index.css"
import Form from './Form'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
        userinput: "",
        names: []
        }
this.handleChange = this.handleChange.bind(this)        
this.handleClick = this.handleClick.bind(this)

}

handleChange = (event) => {
this.setState({
    userinput: event.target.value
    })
}
handleClick = (event) => {
  this.setState(prevState =>({
        names: [...prevState.names, prevState.userinput ]  
      }))
  }

render(){
  return (
    <div id="box">
      <div>
        <Form userinput={this.state.userinput} handleChange={this.handleChange}/>
        <br/>
      </div>
      <div>
        <button onClick={this.handleClick}>Submit</button>
        <br/>
        <h1 onClick={this.handleClick}>{this.state.userinput}</h1>
        <ol>
          {this.state.names.map((name)=>{ 
              return(
                <li>{name}</li>
              )
          })}
        </ol>
      </div>
    </div>
  );
}
}

export default App;
