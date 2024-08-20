import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';
import limage from "../image-1.jpg";
import logo from "../logo.png";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role] = useState('USER');  // Default role
  const [errors, setErrors] = useState({});
  const [onRequest, setOnRequest] = useState(false);
  const [registerProgress, setRegisterProgress] = useState(0);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const authenticateUser = async (user) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const { token } = data;

      if (!token) {
        throw new Error("Token is missing in the response");
      }

      localStorage.setItem('jwtToken', token);
      return token;
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setOnRequest(true);

      const interval = setInterval(() => {
        setRegisterProgress((prev) => prev + 100 / 40);
      }, 50);

      const user = {
        name,
        email,
        password,
        role
      };

      try {
        const token = await authenticateUser(user);
        // await addUser(user, token);

        clearInterval(interval);
        setOnRequest(false);
        navigate('/login');
      } catch (error) {
        clearInterval(interval);
        setOnRequest(false);
        console.error('Registration error:', error);
        setErrors({ server: 'Registration failed. Please try again.' });
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="image-overlay"></div>
        <img src={limage} alt="Register" />
      </div>
      <div className="auth-right">
        <div className="auth-box">
          <img src={logo} alt="Logo" className="register-logo" />
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
            {errors.server && <span className="error server-error">{errors.server}</span>}
            <button type="submit" className="btn">Register</button>
            <div className="switch-link">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
