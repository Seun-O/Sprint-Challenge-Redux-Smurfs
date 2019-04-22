import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import SmurfList from "./SmurfList";
import SmurfItem from "./SmurfItem";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Route path="/" exact component={SmurfList} />
          <Route
            path="/SmurfList/:id"
            render={props => (
              <SmurfItem {...props} smurfs={this.props.smurfs} />
            )}
          />
        </div>
      </Router>
    );
  }
}

const mapProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapProps)(App);
