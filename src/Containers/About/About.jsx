import React from 'react';
import './About.css';

import AboutBanner from '../../Components/AboutBanner/AboutBanner';
import AboutStory from '../../Components/AboutStory/AboutStory';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <AboutBanner />
        <AboutStory />
      </div>
    );
  }
}

export default About;