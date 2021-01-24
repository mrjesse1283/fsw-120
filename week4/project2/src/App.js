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
      <div style={{
        border:"3px solid black", 
        margin:"30px",
        height:"150px",
        width:"50%"}}>
        <Form {...this.state} handleChange={this.handleChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
      <h1 onClick={this.handleClick}>{this.state.userinput}</h1>
      <div style={{
        border:"3px solid black", 
        margin:"30px",
      /*   height:"", */
        width:"50%"
        }}>
          
        <h1 style={{}}>BADGE:</h1>
        <ol>
          {this.state.names.map((name)=>{ 
            var {firstName, lastName, phone, email, favoriteFood,textArea, placeOfBirth } = name
              return(
                <li style={{listStyleType:"none"}}>
                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {firstName}</h1>

                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {lastName}</h1>

                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {email}</h1>
    
                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {placeOfBirth}</h1>

                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {phone}</h1>
    
                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {favoriteFood}</h1>

                  <h1 style={{
                    border:"1px solid black",
                    width: "auto",
                    margin:"10px"
                    }}>
                      {textArea}</h1>

                {/*{firstName}{lastName}{phone}{email}{favoriteFood}{textArea} */}
                </li>
              )
          })}
        </ol>
      </div>
    </div>
  );
}
}

export default App;