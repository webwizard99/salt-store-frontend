import React from 'react';
import './StoreBanner.css';

import Navbar from '../Navbar/Navbar';

class StoreBanner extends React.Component {
  render() {
    return (
      <section className="StoreBanner hero-store">
        <div className="hero-img-store banner-img">
          <p className="reader">A white plain of sea salt drying in the sun</p>
          <Navbar />
          <div className="store-banner">
            <h2 className="store-banner-head">Find your salt</h2>
            <p className="store-banner-text">Combine boutique bath salts with our therapeutic aromatherapy oils to customize your relaxation experience.</p>
          </div>
        </div>
        
      </section>
    )
  }
}

export default StoreBanner;