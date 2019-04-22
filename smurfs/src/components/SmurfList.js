import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from "../actions";
import Smurf from "../components/Smurf";

class SmurfList extends Component {
  render() {
    return (
      <div>
        <h1>Smurfs</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            name={smurf.name}
            height={smurf.height}
            age={smurf.age}
          />
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.getData();
  }
}

const mapProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapProps,
  { getData }
)(SmurfList);
