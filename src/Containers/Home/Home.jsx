import React from 'react';
import './Home.css';

import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeStory from '../../Components/HomeStory/HomeStory';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <HomeBanner />
        <HomeStory />
      </div>
    )
  }
}

export default Home;