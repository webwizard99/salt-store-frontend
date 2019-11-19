import React from 'react';
import './HomeStory.css';

class HomeStory extends React.Component {
  render() {
    return (
      <main class="container home-splash">
        <h1 class="header home-head">Just the therapy you need!</h1>
        <div class="home-img home-img-pc img-float-right">
          <p class="reader">Rolled towels lit by teacandles and a purple tulip</p>
        </div>
        <p class="story-para home-story">We combine the deep-tissue invigoration of a salt-soak with the wide-ranging benefits of aromatherapy tailored for your needs.</p>
        <p class="story-para home-story">Our intuitive process is designed to provide you with expert insight as you select a combination of aromatherapy oils to please your senses and revitalize your body and spirit!</p>
        <div class="home-img home-img-tablet img-float-right">
            <p class="reader">Rolled towels lit by teacandles and a purple tulip</p>
        </div>
        <p class="story-para home-story">We've taken the advice of experts and honed it into an intuitive interface that gives you the power to design the salt soak you want with the peace of mind of knowing your choices will yield a magnificent product!</p>
        
      </main>
    );
  }
}

export default HomeStory;