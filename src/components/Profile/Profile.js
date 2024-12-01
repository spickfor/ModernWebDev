// src/components/Profile/Profile.js
import React, { useState, useEffect } from 'react';
import Parse from 'parse';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Get the current user from Parse
        const currentUser = Parse.User.current();
        if (currentUser) {
            setUser(currentUser);
            setUsername(currentUser.get('username'));
            setEmail(currentUser.get('email'));
        }
    }, []);

    const handleSave = async () => {
        if (user) {
            user.set('username', username);
            user.set('email', email);

            try {
                await user.save();
                alert('Profile updated successfully!');
            } catch (error) {
                alert('Error updating profile: ' + error.message);
            }
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Save Changes</button>
        </div>
    );
};

export default Profile;
