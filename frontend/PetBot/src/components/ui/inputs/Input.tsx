import React from 'react';

interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onClick }) => {
    return (
        <div className="flex items-center p-4">
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-11/12 p-2 border-2 border-gray-200 rounded-lg"
            />
            <button onClick={onClick} className="bg-blue text-white text-xl px-6 py-2">Send</button>
        </div>
    );
};

export default Input;
