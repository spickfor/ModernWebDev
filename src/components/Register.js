// src/components/Register.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../authProvider';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(userInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
