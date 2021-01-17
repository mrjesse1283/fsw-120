

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
                <label id="label">User Input</label>
                <br/>
                <input
                 type="text"                  
                 value={this.props.userinput} 
                 onChange={this.props.handleChange}/>
                <br/>
            </div> 
        </form>
    )}

}

export default Form

/* import React from 'react'

function Form(props){
    let n = props.name

     return(
     <div>
        <form>
            <input 
            type='text'
            placeholder='name'
            value={n}
            onChange={this.handleClick} 
            />
        </form>
    </div>
    
 )} */