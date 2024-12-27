 
import React from "react";
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfilePosts from './ProfilePosts';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
const  Profile=()=>{
return( 
<div className="profilecontainer">
      <ProfileHeader />
  
      <ProfileStats />
      <ProfilePosts />
    </div>
    )
}

export default Profile