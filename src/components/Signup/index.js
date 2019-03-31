import React from 'react';

// import './Login.css';
import Input from '../Input';

const Login = () => {
  return (
    <>
      <Input placeholder="Username" type="text" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm password" type="password" />
    </>
  );
};

export default Login;
