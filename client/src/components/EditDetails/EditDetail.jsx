import React, { Component } from 'react';
import axios from 'axios';

import '../signup/_signup.scss';

// const apiUrl=`http://localhost:5000`;


class EditDetails extends Component {
  state={
    id: '',
  name: "",
  password:'',     
  category:"",    
  days: '',
  date:'',
  amount:0,
  charge1:20,  
  charge2:30,  
  charge3:40,            
};

   handleFormSubmit = (event) => {
    event.preventDefault();
    this.postEditDetails(this.state.id);

  }
  handleFormDelete=(event)=>{
    event.preventDefault();
    this.deleteDetails(this.state.id);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.getEditDetails(id);


  }
  getEditDetails = (id) => {
    axios
      .get(`http://localhost:5000/edit/${id}`)
      .then((response) => {
          console.log( 'response from edit api',response);  
          this.setState({
          id: response.data.id,
          name: response.data.name,         
          password:response.data.password,
          category: response.data.category,
          date:response.data.date,
          days: response.data.days,
          amount: response.data.amount,
          
        });
      })
      .catch((err) => console.log(err));
  };

  postEditDetails=(id) =>{
      axios
      .put(`http://localhost:5000/edit/${id}`,{
        id:this.state.id,
        name: this.state.name,       
        password:this.state.password,         
        category: this.state.category,
        date:this.state.date,
        days: this.state.days,
        amount:this.state.amount,    
      })
      .then((response)=>{
        console.log('response from posting to api',response);
        this.setState({
          name: '',         
          password:'',                
          category: '',
          date:'',
          days: '',
          amount:'',   
        });
      })
      .catch((err)=>console.log(err));
  }

  deleteDetails=(id)=>{
    axios
    .delete(`http://localhost:5000/edit/delete/${id}`)
    .then((response) =>{
      console.log(response);
        console.log('response from delete',response);
        this.setState({
          id: '',
          name: "",
          email: "",
          phone: "", 
          category:"",    
          days: '',
          amount:0,
          password:'',
          charge1:10,  
          charge2:20,  
          charge3:30,        
                             
        });
    })

}
getUpdatedDetails = (id) => {
  axios
    .get(`http://localhost:5000/edit/${id}`)
    .then((response) => {
        console.log( 'response from edit api',response);  
        this.setState({
        id: response.data.id,
        name: response.data.name,         
        password:response.data.password,
        category: response.data.category,
        date:response.data.date,
        days: response.data.days,
        amount: response.data.amount,
        
      });
    })
    .catch((err) => console.log(err));
};

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
 
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleDateChange =(event)=>{
     
    this.setState({
        date: event.target.value,
    });
  };

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  };
  handleDaysChange = (event) => {
    let charge = this.state.charge1;
    if(this.state.category === 'Two Bedroom') {
      charge = this.state.charge2;
    } else if (this.state.category === 'Three Bedroom') {
      charge = this.state.charge3;
    }
    this.setState({
      days: event.target.value,
      amount: event.target.value * charge,
    });
  };

   
  render() {
    
       
    return (
      <div className="login__container">               
      <form className="login__form">
      
      <label htmlFor="name" className="login__label">Name:</label><br />
            <input className="login__input"
              type="text"
              id="name"
              placeholder="Name"
              onChange={this.handleNameChange}
              value={this.state.name} /><br />
        

        <label htmlFor="category" className="login__label">Choose a category:</label><br/>
          <select name="category" id="category" value={this.state.category} onChange={this.handleCategoryChange} className="login__input">
            <option value="" disabled selected>Select the Category</option>
            <option value="One Bedroom">One Bedroom</option>
            <option value="Two Bedroom">Two Bedroom</option>
            <option value="Three Bedroom">Three Bedroom</option>
          </select><br />

          <label htmlFor="date" className="login__label">Date</label><br />
            <input className="login__input"
              type="date"
              id="date"
              value={this.state.date}
              min="2021-03-01" max="2021-12-31"
              onChange={this.handleDateChange} /><br />

        <label htmlFor="days" className="login__label">Number-of-Days</label><br/>
        <input className="login__input"
          type="number" 
          id="days"
          placeholder="Days"
          value={this.state.days}
          onChange={this.handleDaysChange}/><br />
                      
        <label htmlFor="amount" className="login__label login__amountlabel">Total Amount:</label>
          <input className="login__inputamount" value= {this.state.amount}/><br />

        <button className="login__button"
          type="button"
          onClick={this.handleFormSubmit}>Submit</button>

        

        <button className="login__button"
          type="button"         
          onClick={this.handleFormDelete}> Delete</button>
          </form>
        </div>
      
 
 );
}
}

export default EditDetails; 