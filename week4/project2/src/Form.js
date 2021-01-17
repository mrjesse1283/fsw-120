import React from 'react'

class Form extends React.Component {

  
        constructor(props){
            super(props)
            this.state= {          
            }
        }
    
        render(){
    return(

        <form>  
            <div id="input1">
               {/*  <label>User Input</label>
                <br/> */}
                <input size="50"
                 name="firstName"
                 type="text"                  
                 value={this.props.firstName} 
                 onChange={this.props.handleChange}/>
                <input size="50"
                 name="lastName"
                 type="text"                  
                 value={this.props.lastName} 
                 onChange={this.props.handleChange}/>
                <input size="50"
                 name="email"
                 type="text"                  
                 value={this.props.email} 
                 onChange={this.props.handleChange}/>
                <input size="50"
                 name="placeOfBirth"
                 type="text"                  
                 value={this.props.placeOfBirth} 
                 onChange={this.props.handleChange}/>
                <input size="50"
                 name="phone"
                 type="number"                  
                 value={this.props.phone} 
                 onChange={this.props.handleChange}/>
                <input size="50"
                 name="favoriteFood"
                 type="text"                  
                 value={this.props.favoriteFood} 
                 onChange={this.props.handleChange}/>
                 <textarea
                  name="textArea"
                 /*  type="text"  */                 
                  value={this.props.textArea} 
                  onChange={this.props.handleChange}/>
                {/* <input/> */}
            </div> 
        </form>
    )}

}

export default Form