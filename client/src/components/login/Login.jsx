import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import '../signup/_signup.scss';

import { Redirect } from "react-router-dom";
// import logo from '../../assests/icon.jpg';

const apiUrl = `http://localhost:5000`;


class Login extends Component {
  state = {
    formSubmitted:false,
    name: '',
    password: "",
    owner:false,
  };

  
  handleFormSubmit = (event) => {   
    event.preventDefault();  
    this.postLogin();
     
  }
  postLogin = () => {  
     axios
        .post(`${apiUrl}/login`, {
          id:this.state.id,
          name: this.state.name,
          password: this.state.password,

        })
        .then((response) => {
          console.log(response);
            this.setState({
            id:response.data.id,
            name: response.data.name,
            password:response.data.password,            
            category: response.data.category,
            date:response.data.date,
            days:response.data.days,
            amount: response.data.amount,
            formSubmitted: true,
            owner:response.data.owner,
          });
     
        })      
        .catch((err) => {this.clearState();  alert('No booking for this user') })    
  }

  clearState = () => {
    this.setState({
      name: "",
      password: ""
    });
  }
  
 

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handlePasswordInput = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    if (this.state.owner === true){
      let url= `/user/${this.state.id}`;
      console.log('owner details', this.state.id);
      return <Redirect to = {url} />
  }

    if (this.state.formSubmitted === true && this.state.id){
      let url= `/edit/${this.state.id}`;
      return <Redirect to = {url} />
  }
    return (
      <div className="login__container">
        <div className="login__form">
        <h1 className="login__mainheading">My Booking</h1>
          <label htmlFor="name" className="login__label">UserName:</label><br />
          <input className="login__input"
            type="text"
            id="name"
            placeholder="Name"          
            onChange={this.handleNameInput}
            value={this.state.name} /><br />

          <label htmlFor="password" className="login__label">Password</label><br />
          <input className="login__input"
            type="password"
            id="password"
            placeholder="password"
            onChange={this.handlePasswordInput}
            value={this.state.password} /><br />

        
          <button className="login__button"
            type="button"
            onClick={this.handleFormSubmit}>Login</button>
            
        </div>
       
        <div>     
         

        </div>

      </div>


      
    );
  }
}




export default Login;
