import React from 'react';
import './PageNumbers.css';

class PageNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.getPageNumbers = this.getPageNumbers.bind(this);
  }
  
  getPageNumbers() {
    return this.props.pages.map((num, numIndex) => {
      if (num == this.props.page) {
        return (<li><a class="page-num current-page-num" key={numIndex} data-page={num}>{num}</a></li>)
      } else {
        return (<li><a class="page-num" key={numIndex} data-page={num}>{num}</a></li>)
      }
    });
  }
  
  render() {
    return (
      <section className="page-number-container">
      <label for="number-selector">number</label>
      <select className="number-selector">
        <option className="number-option" value="10">10</option>
        <option className="number-option" value="20">20</option>
        <option className="number-option" value="40">40</option> 
      </select>
      <ul className="page-numbers">
        {this.getPageNumbers()}
        
      </ul>
    </section>
    )
  }
}

export default PageNumbers;