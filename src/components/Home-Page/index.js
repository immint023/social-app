import React from 'react';

import './HomePage.css';

import Form from '../Form';
import shoppinig from '../../assets/img/shopping.png';

const HomePage = () => {
  return (
    <>
      <img src={shoppinig} alt='thisisimage' />
      <Form/>      
    </>
  );
};

export default HomePage;