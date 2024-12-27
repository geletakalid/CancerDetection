import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
const ProfileStats = () => {
  return (
    <div className="row">
      <div className="col s4 center-align">
        <span className="stat-value">120</span>
        <span className="stat-label"> Posts</span>
      </div>
      <div className="col s4 center-align">
        <span className="stat-value ">1000</span>
        <span className="stat-label "> Following</span>
      </div>
      <div className="col s4 center-align">
        <span className="stat-value">300</span>
        <span className="stat-label">  Register</span>
      </div>

   
      <div className="col s4 center-align">
        <span className="stat-value">300</span>
        <span className="stat-label"> Patients</span>
      </div>

    </div>
  );
};

export default ProfileStats;