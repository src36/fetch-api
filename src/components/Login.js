import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:"",
        }
    }
    login(){
        console.log(this.state)
   
    fetch(`http://localhost:3000/login?q=${this.state.name}`).then((response) => {
      response.json().then((result) => {
        console.log("result",result);
        if(result.length>0){
            console.log(this.props)
        }else{
            alert("please check username and password ")
        }
      });
    });
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Name" onChange={(event)=>this.setState({name:event.target.value})} /> <br /><br />
                    <input type="password" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})} /> <br /><br />
                    <button onClick={()=>{this.login()}}>Login</button>
                </div>
            </div>
        )
    }
}
