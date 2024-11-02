import React, { useState } from 'react';
import '../css/login.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!value ? 'Email is required.' : '');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(!value ? 'Password is required.' : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) setEmailError('Email is required.');
    if (!password) setPasswordError('Password is required.');

    if (!emailError && !passwordError && email && password) {
      alert('Logged in successfully!');
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className='login-box'>
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`input ${emailError ? 'input-error' : ''}`}
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className={`input ${passwordError ? 'input-error' : ''}`}
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
        </div>
        <button type="submit" className="login-button">Login</button>
        <p className="register-link">
          Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register</a>.
        </p>
      </form>
      </div>
    </div>
  );
}

export default Login;
