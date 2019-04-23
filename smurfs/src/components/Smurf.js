import React from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

const Smurf = props => {
  const handleClick = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  };
  const getImage = () => {
    return `https://source.unsplash.com/collection/2178251/200x200`;
  };
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
        <img src={getImage()} alt="" />
        <p>Age: {props.age}</p>
        <p>Height: {props.height}</p>
      </div>
      <div>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

const mapProps = state => {
  return {
    editing: state.updatingSmurf
  };
};

export default connect(
  mapProps,
  { deleteSmurf }
)(Smurf);
