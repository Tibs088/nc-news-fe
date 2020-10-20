import React from 'react';
import { Link } from '@reach/router'

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Link to='/topics' >
          <button>Topics</button>
        </Link>
        <Link to='/articles' query=''>
          <button>Articles</button>
        </Link>
      </div>
    )
  }
}

export default NavBar;