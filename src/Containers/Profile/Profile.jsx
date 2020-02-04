import React from 'react';
import './Profile.css';

import Navbar from '../../Components/Navbar/Navbar';
import ProfileForm from '../../Components/ProfileForm/ProfileForm';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Navbar />
        <ProfileForm />
      </div>
    )
  }
}

export default Profile;