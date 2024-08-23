import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './App.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook do nawigacji

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      setError('');
      navigate('/home'); // Przeniesienie użytkownika na stronę główną po zalogowaniu
    } else {
      setError('Password must be at least 8 characters long and cannot contain white spaces.');
    }
  };

  const validatePassword = (password) => {
    const hasMinimumLength = password.length >= 8;
    const noWhiteSpace = !/\s/.test(password);
    return hasMinimumLength && noWhiteSpace;
  };

  return (
    <div className="container">
      <h2>Welcome to the future!</h2>
      <h3>Join us if you want to know some predictions.</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className="button">Log In</button>
      </form>
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register" className="register-button">Register</Link>
      </div>
     
    </div>
    
  );
}

export default LoginPage;
