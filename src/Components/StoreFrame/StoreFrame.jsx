import React from 'react';
import './StoreFrame.css';

import { connect } from 'react-redux';
import { SET_ITEMS } from '../../actions/types';
import storeitems from '../../Utilties/storeitems';

import StoreItem from '../StoreItem/StoreItem';
import PageNumbers from '../PageNumbers/PageNumbers';

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
    this.getPagination = this.getPagination.bind(this);
  }

  componentDidMount() {
    storeitems.initTestItems(80);
    const items = storeitems.getItems(this.props.page, this.props.count);
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

  getPagination() {
    if (this.props.items == null) {
      return '';
    } else {
      const total = storeitems.getItemsLength();
      const maxPages = Math.ceil(total / this.props.count);
      let renderPages = [];
      if (maxPages <= 8) {
        for (let i = 1; i <= maxPages; i++) {
          renderPages.push(i);
        }
      }

      return (<PageNumbers pages={renderPages} />);
    }
  }
  
  render() {
    return (
      <main className="StoreFrame">
        {this.getPagination()}
        {this.getItemsForRender()}
        {this.getPagination()}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    page: state.page.page,
    count: state.page.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: (items) => dispatch({ type: SET_ITEMS, items: items })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreFrame);