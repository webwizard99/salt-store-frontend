import React from 'react';
import './Store.css';

import StoreBanner from '../../Components/StoreBanner/StoreBanner';
import StoreFrame from '../../Components/StoreFrame/StoreFrame';

class Store extends React.Component {
  render() {
    return (
      <div className="Store">
        <StoreBanner />
        <StoreFrame />
      </div>
    )
  }
}

export default Store;