import React, { Component } from 'react';

import shopping from '../../assets/img/shopping.png';
import './Login.css';
import Input from '../Input/Input';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

  }
  render() {
    return (
      <div>
        <img src={shopping}/>
        <form className='login'>
            <h2 className='brand'>Panana</h2>
            <Input 
              placeholder='Username'
              type='text'
            />
            <Input 
              placeholder='Password'
              type='password'
            />
            <button>Login</button>
            <p>Bạn không có tài khoản? Đăng ký</p>
        </form>
      </div>
    )
  }
};

export default Login;
