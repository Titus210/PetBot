import React from 'react';

interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onClick }) => {
    return (
        <div className="flex items-center ">
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-11/12 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
            <button onClick={onClick} className="bg-blue text-white text-xl px-6 py-2 rounded-lg ">Send</button>
        </div>
    );
};

export default Input;
