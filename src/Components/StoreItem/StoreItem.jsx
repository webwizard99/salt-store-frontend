import React from 'react';
import './StoreItem.css';

class StoreItem extends React.Component {
  render() {
    const picStyle = {
      backgroundImage: `url('${this.props.item.img_url}')`
    }
    
    return (
      <div className="StoreItem">
        <div className="item-pic" style={picStyle}>
          <p className="reader">{this.props.item.alt_text}</p>
        </div>
        <p className="item-title">{this.props.item.name}</p>
        <p className="item-description">Scented Epsom Salt</p>
        <p className="item-price">${this.props.item.cost.toFixed(2)}</p>
      </div>
    )
  }
}

export default StoreItem;