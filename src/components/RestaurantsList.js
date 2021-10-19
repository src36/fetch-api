import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit } from '@fortawesome/free-solid-svg-icons'

export default class RestaurantsList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
     this.getData()
  }
  getData(){
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.setState({ list: result });
      });
    });
  }
  deleteRes(id){
    console.log('delete')
    fetch(`http://localhost:3000/restaurant/${id}`,{
      method:"DELETE",
     
      
  }).then((response)=>{
      response.json().then((result)=>{
          alert("restaurant deleted")
          this.getData()
      })
  })
  }
  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td><Link to={`/update/${item.id}`}>Update</Link></td>
                    <td><button onClick={()=>this.deleteRes(item.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait...</p>
        )}
      </div>
    );
  }
}
