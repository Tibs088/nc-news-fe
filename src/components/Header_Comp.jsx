import { Link } from '@reach/router';
import React from 'react';
import '../styles/Header_Style.css'

const Header = () => {

  return (
    <div className='Header-container'>
      <Link to="/">
        <h1 className="Title">Northcoders News</h1>
      </Link>
    </div>
  )
};

export default Header;