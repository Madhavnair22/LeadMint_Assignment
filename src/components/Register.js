import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
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

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value !== password ? 'Passwords do not match.' : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(!email ? 'Email is required.' : '');
    setPasswordError(!password ? 'Password is required.' : '');
    setConfirmPasswordError(confirmPassword !== password ? 'Passwords do not match.' : '');

    if (!emailError && !passwordError && !confirmPasswordError && email && password && confirmPassword === password) {
      alert('Registered successfully!');
      navigate('/');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Register</h1>
        <p className="register-subtitle">Create a new account</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-field">
            <label className="form-label">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`input ${emailError ? 'input-error' : ''}`}
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="form-field">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className={`input ${passwordError ? 'input-error' : ''}`}
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>

          <div className="form-field">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`input ${confirmPasswordError ? 'input-error' : ''}`}
            />
            {confirmPasswordError && <span className="error-message">{confirmPasswordError}</span>}
          </div>

          <button type="submit" className="register-button">Register</button>

          <p className="login-link">
            Already have an account? <a href="#" onClick={() => navigate('/')}>Log in</a>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
