import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
const ProfileHeader = () => {
  return (
    <div className="row">
      <div className="col s12 m4 l3 center-align">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-image"
        />
      </div>
      <div className="col s12 m8 l9">
        <h4>Username</h4>
        <p>1000 Followers | 300 Following</p>
        <p className="bio">This is a sample bio. Love photography, traveling, and food.</p>
      </div>
    </div>





  );
};

export default ProfileHeader;