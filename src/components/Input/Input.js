import React, { Component } from 'react';
import './Input.css';
class Input extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      isValid: true
    };
  }
  handleValid(event) {
    if (event.target.value.trim() === '') {
      this.setState({
        isValid: false
      });
    } else {
      this.setState({
        isValid: true
      });
    }
  }
  componentDidUpdate() {
    console.log('Update');
  }
  render() {
    const {placeholder, type} = this.props;
    return (
      <div className='Input'>
        <input 
          placeholder={placeholder}
          type={type}
          onBlur={(event) => this.handleValid(event)}
          ref={this.inputElement}
        />
        {!this.state.isValid && <p>Something is not correct.</p>}
      </div>
    );
  }
}

export default Input;
