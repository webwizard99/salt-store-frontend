import React from 'react';
import './HomeBanner.css';

import Navbar from '../Navbar/Navbar';

class HomeBanner extends React.Component {
  render() {
    return (
      <section className="HomeBanner hero">
        <div className="hero-img-home banner-img">
          <p className="reader">Colored salt in bowls with flowers</p>
          <Navbar />
          <div className="store-button">
              Start Now
          </div>
        </div>
        
      </section>
    )
  }
}

export default HomeBanner;