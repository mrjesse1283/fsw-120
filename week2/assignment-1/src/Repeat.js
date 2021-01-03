import React from "react"


function Repeat(props){
    let t = props.title
    let subT = props.subTitle
    let info = props.information

    return(
        <div>
            <h1 style={{backgroundColor: props.backgroundColor}}> {t} {subT} {info} </h1>   
        </div>
        
    )
}

export default Repeat