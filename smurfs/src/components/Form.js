import React, { Component } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class Form extends Component {
  state = { name: "", age: "", height: "" };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(smurf);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="age"
          value={this.state.age}
          placeholder="Age"
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="height"
          value={this.state.height}
          placeholder="Height"
        />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

const mapProps = state => {
  return state;
};

export default connect(
  mapProps,
  { addSmurf }
)(Form);
