import React from 'react';
import './HomeBanner.css';

import Navbar from '../Navbar/Navbar';

class HomeBanner extends React.Component {
  render() {
    return (
      <div className="HomeBanner hero">
        
        <Navbar />
      </div>
    )
  }
}

export default HomeBanner;