import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default () => {
  return (
    <nav className="menu">
      <div className="header">
        <h1>
          <NavLink to="/">Smurf Village</NavLink>
        </h1>
      </div>
      <div>
        <ul className="menu-links">
          <li className="link-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link-item">
            <a href="#!">Store</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
