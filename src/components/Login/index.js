import React from 'react';

import './Login.css';
import Input from '../Input';

const Login = () => {
  return (
    <div>
      <Input placeholder="Username" type="text" />
      <Input placeholder="Password" type="password" />
    </div>
  );
};

export default Login;
