// src/services/protectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../authProvider';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
