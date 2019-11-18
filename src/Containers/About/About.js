import React from 'react';
import './About.css';

import AboutBanner from '../../Components/AboutBanner/AboutBanner';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <AboutBanner />
      </div>
    );
  }
}

export default About;