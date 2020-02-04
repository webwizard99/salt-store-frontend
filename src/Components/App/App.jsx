import React from 'react';
import './reset.css';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import Store from '../../Containers/Store/Store';
import About from '../../Containers/About/About';
import Profile from '../../Containers/Profile/Profile';

import cookie from '../../Utilties/cookie';
import { SET_CSRF_COOKIE } from '../../actions/types';
import { connect } from 'react-redux';

class App extends React.Component {
  // **-**-**-**-   -**-**-**-**-
  // **-**- Lifecycle methods **-
  // **-**-**-**-   -**-**-**-**-
  componentDidMount() {
    const csrf = cookie.getCookie('csrfToken');
    if (csrf !=="") {
      console.log('csrf cookie found!');
      this.props.setCSRFCookie(csrf);
    } else {
      console.log("Error! No CSRF cookie found!");
    }
  }
  
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

const mapDispatchToProps = dispatch => {
  return {
    setCSRFCookie: (csrfCookie) => dispatch({ type: SET_CSRF_COOKIE, csrfCookie: csrfCookie })
  }
}

export default connect(null, mapDispatchToProps)(App);