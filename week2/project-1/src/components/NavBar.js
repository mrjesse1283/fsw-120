import React from "react"

function NavBar(){
    return(
        <div id="navGrid"style={{backgroundColor:"lightGrey"}}> 
            <a id="a1" href={"#"} style={{textDecoration:"none", color:"white", }}>Start Bootstrap</a>
            <a id="a2" href={"#"} style={{textDecoration:"none", color:"white", }}>home</a>
            <a id="a3" href={"#"} style={{textDecoration:"none", color:"white", }}>about</a>
            <a id="a4"href={"#"} style={{textDecoration:"none", color:"white", }}>sample Post</a>
            <a id="a5" href={"#"} style={{textDecoration:"none", color:"white", }}>contact</a>

        </div>
    )
}

 export default NavBar