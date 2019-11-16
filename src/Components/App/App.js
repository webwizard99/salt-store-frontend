import React from 'react';
import './App.css';

import { BrowserRouter, Route, withRouter } from 'react-router-dom';

const Home = () => (<div>Home</div>);
const Store = () => (<div>Store</div>);
const About = () => (<div>About</div>);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>


      </div>
    )
  }
}

export default App;