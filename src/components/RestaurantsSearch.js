import React, { Component } from "react";
import { Table,Form,Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit } from '@fortawesome/free-solid-svg-icons'


export default class RestaurantsSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch:"",
    };
  }
  search(key) {
    console.log(key);
    this.setState({lastSearch:key})
    fetch(`http://localhost:3000/restaurant?q=${key}`).then((response) => {
      response.json().then((result) => {
        console.log(result);
        if (result.length > 0) {
          this.setState({ searchData: result, noData: false });
        } else {
          this.setState({ noData: true, searchData: null });
        }
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
          this.search(this.state.lastSearch)
      })
  })
  }

  render() {
    return (
      <Container>
        <h1>Restaurant Search</h1>
        {/* <input
          type="text"
          onChange={(event) => this.search(event.target.value)}
        />{" "} */}
        <Form.Control type="text" placeholder="Search Restaurant" onChange={(event) => this.search(event.target.value)}/>
        <br />
        <br />
        <div>
          {this.state.searchData ? (
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
                  {this.state.searchData.map((item) => (
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
            ""
          )}
          {this.state.noData ? <h3>No Data Found</h3> : null}
        </div>
        </Container>
    );
  }
}
