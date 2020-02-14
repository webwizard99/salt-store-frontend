import React from 'react';
import './ProfileForm.css';

class ProfileForm extends React.Component {
  
  render() {
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
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    )
  }
}


export default ProfileForm;