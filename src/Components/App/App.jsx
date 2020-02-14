import React from 'react';
import './reset.css';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import Store from '../../Containers/Store/Store';
import About from '../../Containers/About/About';
import Profile from '../../Containers/Profile/Profile';

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </BrowserRouter>


      </div>
    )
  }
}

export default App;