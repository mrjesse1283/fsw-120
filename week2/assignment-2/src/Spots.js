import React from "react"

function Spots(){

    let vacationSpots = [

        { 
      
          place: "Meridian, Idaho",
      
          price: 40,
      
          timeToGo: "Spring"
      
        },{    
      
          place: "Cancun",
      
          price: 900,
      
          timeToGo: "Winter"
      
        },{   
      
          place: "China",
      
          price: 1200,
      
          timeToGo: "Fall"
      
        },{   
    
          place: "Russia",
      
          price: 1100,
      
          timeToGo: "Summer"
      
        },{ 
      
          place: "Lebanon",
      
          price: 400,
      
          timeToGo: "Spring"
      
        }
      
      ]

    let vacation = vacationSpots.map(function(props){
    /*   let places = props.place
      let price = props.price
      let timeToGo = props.timeToGo */ 
       
      return(
        <div>
            <h1 style={{textAlign:"center", backgroundColor:"blue"}}>Place: {props.place}</h1>
            <h3 style={{textAlign:"center", color:"red"}}>Cost: {props.price}</h3>
            <h3 style={{textAlign:"center", backgroundColor:"green"}}>Best Time to Travel: {props.timeToGo}</h3>
        </div>
    )})
    return(
        <div>
          {vacation} 
        </div>
    )
}
export default Spots

