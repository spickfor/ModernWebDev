import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Parse from 'parse';
import logo from '../images/logo.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();  // Hook to navigate between pages

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Log the user in with Parse
            await Parse.User.logIn(username, password);

            // After successful login, navigate to the home page
            navigate('/');  // Should navigate to the main page
        } catch (error) {
            // Set error message if login fails
            setErrorMessage(error.message); 
        }
    };

    return (
        <div>

            <nav>
                <img src = {logo} className="logo"/>
            </nav>

            <h2>Login</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Usesrname"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/create-account">Create one here</a></p>
        </div>
    );
};

export default Login;
