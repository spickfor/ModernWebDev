// src/services/authService.js
const authService = {
    login: async (credentials) => {
        // Placeholder for actual API call
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
        });
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    },

    register: async (userInfo) => {
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json' },
        });
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },
};

export default authService;
