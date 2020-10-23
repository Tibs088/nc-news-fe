//React 
import { Link } from '@reach/router';
import React from 'react';
//styles
import '../styles/Header_Style.css'
//components
import NavBar from './Nav_Bar_Comp';

const Header = () => {

  return (
    <div className='Header-container'>
      {/* links back to the home page */}
      <Link to="/">
        <h1 className="Title">Northcoders News</h1>
      </Link>
      {/* stores the drop down menu for navigation */}
      <div className='Navigation'>
        <NavBar />
      </div>
    </div>
  )
};

export default Header;