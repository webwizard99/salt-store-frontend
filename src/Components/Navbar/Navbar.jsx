import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <Link to="/" className="logo-group">
          <div className="logo-group">
            <span className="logo">&</span>
            <span className="tagline">find your salt</span>
          </div>
        </Link>
        <ul className="nav-options">
          <li><Link to="/store"><span>Store</span></Link></li>
          <li><Link to="/about"><span>About</span></Link></li>
          <li><Link to="/profile"><span>Profile</span></Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;