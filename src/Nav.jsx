import React from "react";
import './nav.css';
import {Link} from 'react-router-dom'

const nav = () => {
  return (
    <div>
      <nav id="nav">
        <Link className='link' to='/'>
          <p>Home</p>
        </Link>
        <Link className='link' to='/About'>
          <p>About</p>
        </Link>
        <Link className='link' to='/Contactus'>
          <p>Contactus</p>
        </Link>
        <Link className='link' to='/Product'>
          <p>Product</p>
        </Link>
        <Link className='link' to='/Signup'>
          <p>Signup</p>
        </Link>
        <Link className='link' to='Login'>
          <p>Login</p>
        </Link>
      </nav>
    </div>
  );
};

export default nav;
