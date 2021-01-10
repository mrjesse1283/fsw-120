import React from "react"


class DiceRoll extends React.Component  {
    constructor(){
        super()
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0,
            count5: 0,
// ask Giselle
            }
        this.handleClick = this.handleClick.bind(this)
    }
/* handleClick(){
    const min = 1;
    const max = ;
    const rand = min + Math.random() * (max - min);
    this.setState({ count: this.state.count + rand });
         } */

      handleClick = () => {
    
        this.setState(prevState=>({
            count1:Math.floor(Math.random()*6+1),
            count2:Math.floor(Math.random()*6+1),
            count3:Math.floor(Math.random()*6+1),
            count4:Math.floor(Math.random()*6+1),
            count5:Math.floor(Math.random()*6+1),
        }))
       };


    render() {
        
        return (
            <div>
                <button onClick={this.handleClick}>ROLL</button>
                <h1 style={{border:"1px solid black"}}>{this.state.count1}</h1>
                <h1 style={{border:"1px solid black"}}>{this.state.count2}</h1>
                <h1 style={{border:"1px solid black"}}>{this.state.count3}</h1>
                <h1 style={{border:"1px solid black"}}>{this.state.count4}</h1>
                <h1 style={{border:"1px solid black"}}>{this.state.count5}</h1>
               
            </div>
            );
        }
  } 

  export default DiceRoll