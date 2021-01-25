import React from "react"
import {Link} from "react-router-dom"

function Navbar() {   
    let style = {
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        backgroundColor: 'grey',
    } 
    return (
        <div style={style}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contacts">contact</Link>
        </div>
    )
}

export default Navbar