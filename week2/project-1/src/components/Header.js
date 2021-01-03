import React from "react"

import NavBar from "./NavBar"

function Header(){
    return(
        <div>
            <NavBar/>
            <div style={{
                    height:"400px", 
                    backgroundColor:"lightGrey", 
                    textAlign:"center"
                    }}>
                <h1 style={{fontSize:"80px",
                            color:"white",
                            margin:"0px",
                            paddingTop:"100px"}}>
                                Clean Blog</h1>
                <p style={{fontSize:"30px",
                           color:"white"}}>
                            A Blog Theme By Bootstrap</p>
            </div>
        </div>
    )
}

export default Header;