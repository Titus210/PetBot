import React, { useState } from 'react';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Redirect or handle success response
                window.location.href = '/homepage/chat';
            } else {
                // Handle error response
                const status = response.status;
                if (status === 401) {
                    const data = await response.json();
                    setErrorMessage(data.error);
                } else if (status === 404) {
                    setErrorMessage('User not found. Please register.');
                } else {
                    console.error('An unexpected error occurred:', status);
                    setErrorMessage('An unexpected error occurred.');
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setErrorMessage('An unexpected error occurred.');
        }
    };

    return (
        <form>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div className="input">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-full p-2 border-2 border-gray-200 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full p-2 border-2 border-gray-200 rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="button">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full p-2 text-white bg-blue rounded-lg"
                    >Login with Email</button>
                    {errorMessage && <p className="text-red">{errorMessage}</p>}
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
