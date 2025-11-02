import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  // Cek apakah ada token di localStorage
  const token = localStorage.getItem('token');
  
  // Jika ada token, render komponen (children)
  // Jika tidak, arahkan ke halaman /login
  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

