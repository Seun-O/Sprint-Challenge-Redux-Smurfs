import React from "react";
import { connect } from "react-redux";

import { editStart, editStop, updateSmurf } from "../actions";

class SmurfItem extends React.Component {
  state = { name: "", age: "", height: "" };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleClick = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.updateSmurf(this.props.match.params.id, smurf);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div>
          {this.props.editing ? (
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
            />
          ) : (
            <h1>{this.state.name}</h1>
          )}
          {this.props.editing ? (
            <input
              onChange={this.handleChange}
              type="text"
              name="age"
              placeholder="Age"
              value={this.state.age}
            />
          ) : (
            <p>{this.state.age}</p>
          )}
          {this.props.editing ? (
            <input
              onChange={this.handleChange}
              type="text"
              name="height"
              placeholder="Height"
              value={this.state.height}
            />
          ) : (
            <p>{this.state.height}</p>
          )}
        </div>
        <div>
          <button onClick={() => this.props.editStart()}>Edit</button>
          {this.props.editing ? (
            <button onClick={() => this.props.editStop()}>Save</button>
          ) : (
            <button onClick={this.handleClick}>Done</button>
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const smurf = this.props.smurfs.find(
      smurf => `${smurf.id}` === this.props.match.params.id
    );
    this.setState({ name: smurf.name, age: smurf.age, height: smurf.height });
  }
}

const mapProps = state => {
  return {
    editing: state.updatingSmurf
  };
};

export default connect(
  mapProps,
  { editStart, editStop, updateSmurf }
)(SmurfItem);
