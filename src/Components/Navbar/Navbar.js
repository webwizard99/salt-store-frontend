import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <a href="index.html">
        <div className="logo-group">
          <span className="logo">&</span>
          <span className="tagline">find your salt</span>
        </div>
        </a>
        <ul className="nav-options">
          <li><a href="store.html">Store</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;