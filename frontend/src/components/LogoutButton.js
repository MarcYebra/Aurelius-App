import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

export const handleLogout = () => {
  localStorage.removeItem('token') 
  delete axios.defaults.headers.common['Authorization'];
};

const LogoutButton = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    handleLogout() 
    navigate('/login'); 
  };

  return (
    <button onClick={onLogout} style={{ padding: '10px', margin: '10px' }}>
      Logout
    </button>
  );
};

export default LogoutButton;
