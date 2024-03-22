import React, { useState } from 'react';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        if (!termsAgreed) {
            setErrorMessage('Please agree to the Terms and Conditions.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirect or handle success response
                console.log('Registration successful');
            } else {
                // Handle error response
                console.error('Registration failed:', data.error);
                setErrorMessage(data.error);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setErrorMessage('An unexpected error occurred.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="input">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="w-full p-2 border-2 border-gray-200 rounded-lg"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
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
                        <div className="input">
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full p-2 border-2 border-gray-200 rounded-lg"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                name="termsAgreed"
                                id="termsAgreed"
                                checked={termsAgreed}
                                onChange={(e) => setTermsAgreed(e.target.checked)}
                            />
                            <label htmlFor="termsAgreed">I agree to the <span className="text-blue">Terms and Conditions</span></label>
                        </div>
                    </div>
                    <div className="button">
                        <button
                            type="submit"
                            className="w-full p-2 text-white bg-blue rounded-lg"
                        >Sign Up</button>
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUpForm;
