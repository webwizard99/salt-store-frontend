import React from 'react';
import './AboutStory.css';

class AboutStory extends React.Component {
  render() {
    return (
      <main class="container about-container">
        <p class="story-para about-story">Our custom salt shopping process is designed to allow you to find the right salt soak and aromatherapy for you.</p>
        <div class="about-img about-img-pc img-float-left">
          <p class="reader">A woman's feet, with toenails painted red, soaking in a white tub full of water</p>
        </div>
        <p class="story-para about-story">We're dedicated to the therapeutic value of salts for recovery from exertions, whether from sport or from work.</p>
        <div class="about-img about-img-tablet img-float-left">
            <p class="reader">A woman's feet, with toenails painted red, soaking in a white tub full of water</p>
        </div>
        <p class="story-para about-story">We'll help you understand the benefit of our aromatherapy oils and help you to find a pleasing combination of salt and oil that addresses your therapeutic needs.</p>
        <p class="story-para about-story">We've invested exhaustive research intot the benefit of aromatherapy oils, and we've compiled them into a system designed to identify the best combinations, both for therapeutic benefit and aesthetic pleasure.</p>
        <p class="story-para about-story">Let us show you how we can deliver a unique product tailored to your needs and tastes!</p>
      </main>
    );
  }
}

export default AboutStory;