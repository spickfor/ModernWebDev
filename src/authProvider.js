// src/auth/AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from './Services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (credentials) => {
        const loggedInUser = await authService.login(credentials);
        setUser(loggedInUser);
        if (loggedInUser) navigate('/protected'); // Navigate after login
    };

    const register = async (userInfo) => {
        const registeredUser = await authService.register(userInfo);
        setUser(registeredUser);
        if (registeredUser) navigate('/protected');
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        navigate('/login');
    };

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
