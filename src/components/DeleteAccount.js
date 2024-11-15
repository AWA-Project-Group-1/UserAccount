import React, { useState } from 'react';
import axios from 'axios';

function DeleteAccount({ user }) {
    const [message, setMessage] = useState('');

    const handleDeleteAccount = async () => {
        try {
            const headers = { Authorization: user.token };
            await axios.delete('http://localhost:5000/api/auth/delete-account', { headers });
            setMessage('Account deleted');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Failed to delete account');
        }
    };

    return (
        <div>
            <h2>Delete Account</h2>
            <button onClick={handleDeleteAccount}>Delete Account</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default DeleteAccount;
