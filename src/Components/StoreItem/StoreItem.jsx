import React from 'react';
import './StoreItem.css';

class StoreItem extends React.Component {
  render() {
    const picStyle = {
      backgroundImage: `url('${this.props.item.img}')`
    }
    
    return (
      <div className="StoreItem">
        <div className="item-pic" style={picStyle}>
          <p className="reader">{this.props.item.alt}</p>
        </div>
        <p className="item-title">{this.props.item.name}</p>
        <p className="item-description">Scented Epsom Salt</p>
        <p className="item-price">{this.props.item.price}</p>
      </div>
    )
  }
}

export default StoreItem;