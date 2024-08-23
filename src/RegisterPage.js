import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importowanie hooka useNavigate
import './RegisterPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // Inicjalizacja hooka useNavigate

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (username.trim() === '') {
      newErrors.username = 'Username cannot be empty.';
    }

    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Jeśli formularz jest poprawny, wyślij dane (np. do API)
      alert('Registration successful!');
      navigate('/home');  // Przeniesienie użytkownika na stronę główną
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        
        <div className="inputGroup">
          <label htmlFor="username" className="label">Username:</label>
          <input
            type="text"
            id="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="inputGroup">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="inputGroup">
          <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
