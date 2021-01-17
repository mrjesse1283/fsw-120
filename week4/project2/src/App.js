import React, {Component} from "react"

import "./index.css"
import Form from './Form'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        textArea: "",
        names: []
        }
this.handleChange = this.handleChange.bind(this)        
this.handleClick = this.handleClick.bind(this)

}

handleChange = (event) => {
this.setState({
    [event.target.name]: event.target.value
    })
}
handleClick = (event) => {
  var badge = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    placeOfBirth: this.state.placeOfBirth,
    phone: this.state.phone,
    favoriteFood: this.state.favoriteFood,
    textArea: this.state.textArea,
  }
  /* if(this.state.userinput.length >= 3 ){ */
  this.setState(prevState =>({
        names: [...prevState.names, badge ]  

      
      }))
  /* } */
}

render(){
  return (
    <div>
      <div>
        <Form {...this.state} handleChange={this.handleChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
      <h1 onClick={this.handleClick}>{this.state.userinput}</h1>
      <ol>
        {this.state.names.map((name)=>{ 
          var {firstName, lastName, phone, email, favoriteFood,textArea, placeOfBirth } = name
            return(
              <li>
                <h1>{firstName}</h1>
                {firstName}{lastName}{phone}{email}{favoriteFood}{textArea}
              </li>
            )
        })}
      </ol>
    </div>
  );
}
}

export default App;