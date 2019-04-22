import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getData } from "../actions";
import Smurf from "../components/Smurf";
import Form from "./Form";
import "./List.css";

class SmurfList extends Component {
  render() {
    return (
      <div className="list-container">
        <div className="list-form">
          <Form />
        </div>
        <div className="list-items">
          {this.props.smurfs.map(smurf => (
            <Link key={smurf.id} to={`/SmurfList/${smurf.id}`}>
              <Smurf
                id={smurf.id}
                name={smurf.name}
                height={smurf.height}
                age={smurf.age}
              />
            </Link>
          ))}
        </div>
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
