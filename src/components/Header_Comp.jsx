import { Link } from '@reach/router';
import React from 'react';
import '../styles/Header_Style.css'
import NavBar from './Nav_Bar_Comp';

const Header = () => {

  return (
    <div className='Header-container'>
      <Link to="/">
        <h1 className="Title">Northcoders News</h1>
      </Link>
      <div className='Navigation'>
        <NavBar />
      </div>
    </div>
  )
};

export default Header;