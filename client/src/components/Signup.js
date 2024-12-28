import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from "materialize-css";


const Signup = () => {
  const history= useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   M.AutoInit();
  // }, []);

  const validate = () => {
    let tempErrors = {};
    if (!firstName) tempErrors.firstName = 'First Name is required';
    if (!lastName) tempErrors.lastName = 'Last Name is required';
    if (!email) tempErrors.email = 'Email is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'Email is not valid';
    if (!password) tempErrors.password = 'Password is required';
    if (password && password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const PostData = () => {
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.err)
        if (data.err) {
          M.toast({ html: data.err, classes: '#e57373 red lighten-2' });
        } else {
          M.toast({ html: 'Signup successful!.', classes: 'green darken-1' });
         
          // Clear form fields
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          history('/signin') 
        }
        setIsSubmitting(false);
        // Reset the submitting state
      })
      .catch((error) => {
        console.log(error);
        M.toast({ html: 'An error occurred. Please try again.', classes: 'red darken-1' });
        setIsSubmitting(false); // Reset the submitting state
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate() && !isSubmitting) {
      setIsSubmitting(true); // Set the submitting state
      PostData();
    }
  };

  return (
    <div className="container">
      <div className="card custom col s12 m6 l4" id="c">
        <h3 className="loginfont">Sign Up</h3>
        <div className="card-content">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={errors.firstName ? 'invalid' : ''}
                />
                <label htmlFor="firstName">First Name</label>
                {errors.firstName && <span className="helper-text" data-error={errors.firstName}></span>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={errors.lastName ? 'invalid' : ''}
                />
                <label htmlFor="lastName">Last Name</label>
                {errors.lastName && <span className="helper-text" data-error={errors.lastName}></span>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? 'invalid' : ''}
                />
                <label htmlFor="email">Email</label>
                {errors.email && <span className="helper-text" data-error={errors.email}></span>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? 'invalid' : ''}
                />
                <label htmlFor="password">Password</label>
                {errors.password && <span className="helper-text" data-error={errors.password}></span>}
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? 'invalid' : ''}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                {errors.confirmPassword && <span className="helper-text" data-error={errors.confirmPassword}></span>}
              </div>
            </div>

            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
        <Link to="/signin">
          <h6>Already have an account?</h6>
        </Link>
      </div>
    </div>
  );
};

export default Signup;