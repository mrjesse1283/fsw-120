import React from "react"

class SquareColor extends React.Component{
    constructor(props){
        super(props)
        this.state= {          
        }
    }

    render(){
        return(
            <div style={{margin:"25px"}}>
                <h1 style={
                    {height:"150px",
                     border:"1px solid black",
                     borderRadius:"20%",
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"center",
                     margin:"10px",
                     backgroundColor:this.props.backgroundColor
        
                     }}>Tap This</h1>
            </div>

        )
    }
}

export default SquareColor