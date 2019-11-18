import React from 'react';
import './StoreBanner.css';

import Navbar from '../Navbar/Navbar';

class StoreBanner extends React.Component {
  render() {
    return (
      <div className="StoreBanner">
        <Navbar />
      </div>
    )
  }
}

export default StoreBanner;