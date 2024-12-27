import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
const ProfilePosts = () => {
  return (
    <div className="profile-posts">
      <div className="post">
        <img src="https://via.placeholder.com/250" alt="Post 1" />
      </div>
      <div className="post">
        <img src="https://via.placeholder.com/250" alt="Post 2" />
      </div>
      <div className="post">
        <img src="https://via.placeholder.com/250" alt="Post 3" />
      </div>
      <div className="post">
        <img src="https://via.placeholder.com/250" alt="Post 4" />
      </div>
      <div className="post">
        <img src="https://via.placeholder.com/250" alt="Post 4" />
      </div>
      {/* More posts can be added here */}
    </div>
  );
};

export default ProfilePosts;