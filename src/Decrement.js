import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
    this.decrement = this.decrement.bind(this);
  }

  //Decrement
  decrement() {
    if (this.state.number === 0) {
      alert("Cannot decrement below zero!");
    } else {
      this.setState((state) => ({
        number: state.number - 1,
      }));
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

Decrement.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Decrement;