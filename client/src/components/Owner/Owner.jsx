import React, { Component } from "react";
import axios from "axios";
import "../Owner/_owner.scss";

const apiUrl = `http://localhost:5000`;

class Owner extends Component {
  state = {
    data: [],
  };
  getData = () => {
    axios
      .get(`${apiUrl}/user`)
      .then((response) => {
        console.log("response from user", response.data);
        this.setState({
          data: response.data,
        });
        console.log(this.state.data);
      })
      .catch((error) => console.log(error));
  };
  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <div>
        <h1 className="owner__heading">Client Details</h1>
        <div className="owner__container">
          <div className="owner__container1">
            <label className="owner__label">Name:</label>
            <label className="owner__label">Category:</label>
            <label className="owner__label">Date:</label>
            <label className="owner__label">Days:</label>
            <label className="owner__label">Amount:</label>
          </div>

          {this.state.data.map((item) => (
            <div className="owner__list" key={item.id}>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.date}</p>
              <p>{item.days}</p>
              <p>{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Owner;
