import React from 'react';
import './Home.css';

import HomeBanner from '../../Components/HomeBanner/HomeBanner';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <HomeBanner />
      </div>
    )
  }
}

export default Home;