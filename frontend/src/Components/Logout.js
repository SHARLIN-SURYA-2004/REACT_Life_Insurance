import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Retrieve the JWT token from local storage
        const token = localStorage.getItem('jwtToken');

        if (token) {
          // Send a request to the backend to invalidate the token
          await axios.delete('http://localhost:8080/api/v1/auth/logout', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
        }

        // Clear the JWT token and other user data from local storage
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userEmail');
        localStorage.setItem('isLoggedIn', 'false');

        // Redirect to the login page after successful logout
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
        // Optionally, you can show an error message to the user
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="logout">
      <h2>Logging out...</h2>
      <p>You will be redirected to the login page shortly.</p>
    </div>
  );
};

export default Logout;
