import React, { Component } from 'react'

export default class RestaurantsUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
              console.log(result);
              this.setState({
                    id:result.id,
                   name: result.name,
                   email: result.email,
                   rating: result.rating,
                   address: result.address,

                });
            });
          });
    }
     updateRes(){
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                alert("List updated Successfully")
            })
        })
     }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>Restaurant Update</h1>
                <div>
          <input
            type="text"
            placeholder="Restaurant Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            value={this.state.name}
          /> <br /> <br />
          <input
            type="text"
            placeholder="Restaurant Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            value={this.state.email}
          /> <br /> <br />
          <input
            type="text"
            placeholder="Restaurant Rating"
            onChange={(e) => {
              this.setState({ rating: e.target.value });
            }}
            value={this.state.rating}
          /> <br /> <br />
          <input
            type="text"
            placeholder="Restaurant Address"
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
            value={this.state.address}
          /> <br /> <br />
          <button onClick={()=>this.updateRes()} >Update Restaurant</button>
        </div>
            </div>
        )
    }
}
