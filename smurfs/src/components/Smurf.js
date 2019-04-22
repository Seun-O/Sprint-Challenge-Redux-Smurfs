import React from "react";

export default props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.height}</p>
    </div>
  );
};
