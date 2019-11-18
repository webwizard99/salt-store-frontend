import React from 'react';
import './Store.css';

import StoreBanner from '../../Components/StoreBanner';

class Store extends React.Component {
  render() {
    return (
      <div className="Store">
        <StoreBanner />
      </div>
    )
  }
}

export default Store;