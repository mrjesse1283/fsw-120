import React from 'react'
import axios from "axios"
// import { render } from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      updating: false,
      data: [] 
    }
    // this.onPost = this.onPost.bind(this)
    // this.onDelete = this.onDelete.bind(this)
    // this.onPut = this.onPut.bind(this)
  }

  // this is my get request I think lol 
  async componentDidMount() {
    const url = ("https://api.vschool.io/HernandezCapstone/todo")
    const response = await axios(url);
    const data = response.data
    console.log(data)
    this.setState({ data })

  }
  // on change is for the inputs to see what the user is typing
  onChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onPost = (e) => {
    e.preventDefault()
    let newObject = {
      "title": this.state.title,
      "description": this.state.description
    }
    // console.log(newObject)
    axios.post("https://api.vschool.io/HernandezCapstone/todo", newObject)
      .then(response => {
        this.setState(prevState => ({
          data: [...prevState.data, response.data], //... spread operator: means taking data array without the array 
          title: "",
          description: ""
        }))

      })
      .catch(err => console.log(err))
  }

  // onDelete = (e) => { 
  //   e.preventDefault()

  //   console.log(e.target.id)
  //   // {title: this.state.title,
  //   //                  description: this.state.description}
  //   axios.delete("https://api.vschool.io/HernandezCapstone/todo/" + e.target.id)
  //     .then(response => {
  //       console.log(response)
  //       // let del = document.getElementById("del")
  //       // del === e.target.id ? del.innerHTML = "" : null


  //     })
  //       .catch(err => console.log(err))
  // }
  onDelete = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    let del = document.getElementByClassName("remove")
    let delDiv = document.getElementById("del")

    for (let i = 0; i < del.length; i++) {
      if (e.target == del[i]) {
        let checked = del[i].parentNode
        let x = checked.id
        axios.delete("https://api.vschool.io/HernandezCapstone/todo/" + x)
        delDiv.removeChild(x)
          .then()
          .catch(err => console.log(err))
      }
    }
  } /*  ask The zelle */
  onPut = (e) => {
    e.preventDefault()
    let newObject = {
      "title": this.state.title,
      "description": this.state.description

    }
    console.log(newObject)
    // {title: this.state.title,
    //                  description: this.state.description}
    axios.put("https://api.vschool.io/HernandezCapstone/todo/" + this.state.id, newObject)
      .then(res => {
        this.setState(prevState => ({
          // data: [...prevState.data, res.data] //... spread operator: means taking data array without the array
          id: "",
          updating: false,
          title: "",
          description: ""
        }))

      })
      .catch(err => console.log(err))
  }
  updating = (e) => this.setState({ updating: true, id: e.target.id })



  render() {
    return (
      <div>
        <div >
          <form style={{
            backgroundColor: "#00ffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            borderRadius: "35px",
            alignItems: "center",
            border: "solid black",
            height: "90px",
            marginRight: "30%",
            marginLeft: "30%"
          }} >
            <input onChange={this.onChange} name="title" value={this.state.title} placeholder="Full Name " />

            <input onChange={this.onChange} name="description" value={this.state.description} placeholder="description " />

            <button onClick={this.state.updating ? this.onPut : this.onPost}>Create</button>
          </form>
        </div>

        

        <div >
          {this.state.data.map(person => (
            <div key={person._id} id={person._id} >
              <div id="del" style={{
                backgroundColor: "lightskyblue",
                border: "1px solid black",
                borderRadius: "30px",
                marginRight: "30%",
                marginLeft: "30%",
                marginTop: "10px",
                marginBottom: "10px"
              }}>
                <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{person.title}</h1>
                <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> {person.description}</h3>
                <button style={{ borderRadius: "40px", marginLeft: "15px", marginBottom: "10px", backgroundColor: "red", fontSize: "15px" }} id={person._id} onClick={this.onDelete} className="remove">Remove </button>
                <button style={{ float: "right", borderRadius: "40px", marginRight: "15px", marginBottom: "10px", backgroundColor: "lightgreen" }} id={person._id} onClick={this.updating} className="update">Update</button>  {/* function on line 94 could have been written in the onClick */}
              </div>
            </div>))
          }

        </div>

      </div>
    );

  }
}
export default App;
