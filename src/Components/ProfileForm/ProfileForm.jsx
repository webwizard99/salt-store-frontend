import React from 'react';
import './ProfileForm.css';

import { connect } from 'react-redux';

class ProfileForm extends React.Component {
  
  render() {
    console.log(`ProfileForm... ${this.props.csrfToken}`)
    return (
      <div className="ProfileForm">
        <form action="http://salt-store-backend.herokuapp.com/user/signup" method="post">
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <input type="hidden" name="_csrf" value={this.props.csrfToken} />
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    csrfToken: state.cookies.csrf
  }
}

export default connect(mapStateToProps)(ProfileForm);