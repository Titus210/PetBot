import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Redirect or handle success response
                console.log('Login successful');
            } else {
                // Handle error response
                console.error('Login failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
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
                    <PrimaryButton
                        type="submit"
                        colorVariation="blue"
                        ButtonText="Login"
                    />
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
