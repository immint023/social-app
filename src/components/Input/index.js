import React, { Component } from 'react';
import './Input.css';
import checkValidForm from '../../validation/isValidForm';

class Input extends Component {
  state = {
    isValid: true,
  };

  handleValid({ target: { type, value } }) {
    if (checkValidForm(type, value)) {
      this.setState({
        isValid: true
      });
    } else {
      this.setState({
        isValid: false
      });
    }
  }

  render() {
    const {
      props: { placeholder, type },
    } = this;
    return (
      <div className="Input">
        <input
          placeholder={placeholder}
          type={type}
          onChange={event => this.handleValid(event)}
          ref={this.inputElement}
        />
        {!this.state.isValid && <p>Something is not correct.</p>}
      </div>
    );
  }
}

export default Input;
