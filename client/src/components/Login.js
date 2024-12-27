
import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div class="container">
      <div className="card custom col s12 m6 l4 " id="c">
        <h3 className="loginfont">Sign In</h3>
        <div className="card-content">
          <form className="col s12">

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div> 
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
        <Link to='/signup'><h6>Don't have an account?</h6></Link>
      </div>
      </div>
    );
  };
  
  export default Login;