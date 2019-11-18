import React from 'react';
import './AboutBanner.css';

import Navbar from '../Navbar/Navbar';

class AboutBanner extends React.Component {
  render() {
    return (
      <div className="AboutBanner hero">
          <div className="hero-img-about banner-img">
          <p className="reader">Footprints on a beach with a gentle wave coming in</p>
          <Navbar />
          <div className="container">
            <h1 className="header about-header-main">The Right Therapy for You</h1>
            <hr className="about-rule" />
          </div>
        </div>
        
      </div>
    )
  }
}

export default AboutBanner;