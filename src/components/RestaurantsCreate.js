import React, { Component } from "react";

export default class RestaurantsCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }
    createRes(){
        console.log(this.state)
        fetch("http://localhost:3000/restaurant",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                console.log(result)
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <div>
          <input
            type="text"
            placeholder="Restaurant Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          /> <br /> <br />
          <input
            type="text"
            placeholder="Restaurant Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          /> <br /> <br />
          <input
            type="text"
            placeholder="Restaurant Rating"
            onChange={(e) => {
              this.setState({ rating: e.target.value });
            }}
          /> <br /> <br />
          <input
            type="text"
            placeholder="Restaurant Address"
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
          /> <br /> <br />
          <button onClick={()=>this.createRes()} >Add Restaurant</button>
        </div>
      </div>
    );
  }
}
