import React from 'react';
import { Link } from '@reach/router'

class NavBar extends React.Component {

  render() {
    return (
      <Link to='/topics' >
        <button>Topics</button>
      </Link>
    )
  }
}

export default NavBar;