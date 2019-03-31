import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Form.css';

import Login from '../Login';
import Signup from '../Signup';
import Button from '../Button';

const Form = () => {
  return (
    <Router>
      <>
        <form className="form">
          <h2 className="brand">Panana</h2>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Button content="Đăng nhập" />
          <Route
            exact
            path="/"
            render={() => (
              <p>
                Bạn không có tài khoản?
                <Link to="/signup">Đăng ký.</Link>
              </p>
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <p>
                Bạn đã có tài khoản?
                <Link to="/">Đăng nhập.</Link>
              </p>
            )}
          />
        </form>
      </>
    </Router>
  );
};

export default Form;
