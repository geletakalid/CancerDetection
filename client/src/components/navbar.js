
import React from "react";
import { Link } from "react-router-dom";

const  Navbar=()=>{
return( 
    <nav>
      <div class="nav-wrapper">
        <Link to="/" className="brand-logo">MediSphere</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/signin">Login</Link></li>
          <li><Link to="/signup ">Sign up</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav> )
}

export default Navbar