import React from 'react';
import './StoreFrame.css';

import { connect } from 'react-redux';
import { SET_ITEMS } from '../../actions/types';
import storeitems from '../../Utilties/storeitems';

import StoreItem from '../StoreItem/StoreItem';

class StoreFrame extends React.Component {
  // **--**--**--**--**-
  // -**--**--**--**--*
  // -- Lifecycle Methods
  // -**--**--**--**--*
  // **--**--**--**--**-
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      number: 20
    }

    this.getItemsForRender = this.getItemsForRender.bind(this);
  }

  componentDidMount() {
    storeitems.initTestItems(80);
    const items = storeitems.getItems(this.state.page, this.state.number);
    this.props.setItems(items);
  }

  getItemsForRender() {
    if (this.props.items == null) {
      return '';
    } else {
      const tItems = this.props.items;
      return tItems.map((rItem, itemN) => {
        return (
          <StoreItem item={rItem} key={itemN} />
        )
      })
    }
  }
  
  render() {
    return (
      <main className="StoreFrame">
        {this.getItemsForRender()}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: (items) => dispatch({ type: SET_ITEMS, items: items })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreFrame);