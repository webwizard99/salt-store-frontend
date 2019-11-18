import React from 'react';
import './AboutBanner.css';

import Navbar from '../Navbar/Navbar';

class AboutBanner extends React.Component {
  render() {
    return (
      <div className="AboutBanner">
        <Navbar />
      </div>
    )
  }
}

export default AboutBanner;