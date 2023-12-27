import React from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';

const Index = () => {
  return (
    <>
      <Link
        to="Login"
      >
        <button>Login</button>
      </Link>
    </>
  )
};

export default Index;