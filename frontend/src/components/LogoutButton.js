import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  const isLoggedIn = localStorage.getItem('token')

  if (!isLoggedIn) return null
  return (
    <button onClick={handleLogout} style={{ padding: '10px', margin: '10px' }}>
      Logout
    </button>
  );
};

export default LogoutButton;
