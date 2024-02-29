import React, { useState } from 'react';

import Input from '../../components/ui/inputs/Input';

const initialUserPrompts = [
  {
    id: 1,
    userPrompt: "I need help with my pet",
    response: "How can I help you?"
  },
  {
    id: 2,
    userPrompt: "I need help with my pet",
    response: "How can I help you?"
  },
];

const Chat = () => {
  const [userPrompts, setUserPrompts] = useState(initialUserPrompts);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

const handleSendClick = async () => {
  if (inputValue.trim() !== '') {
    try {
      // Make a POST request to your backend API
      const response = await fetch('your-backend-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify({
          userInput: inputValue,
        }),
      });

      if (!response.ok) {
        // Handle error response from the backend
        throw new Error('Failed to submit user input to the backend');
      }

      // If the request was successful, update the user prompts state
      const newPrompt = {
        id: userPrompts.length + 1,
        userPrompt: inputValue,
        response: "How can I help you?",
      };

      setUserPrompts([...userPrompts, newPrompt]);
      setInputValue('');
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error:', error.message);
    }
  }
};

  return (
    <>
      <div className="flex h-screen flex-col w-full relative">
        <div className="mx-auto md:w-10/12">
          <div className="flex-grow overflow-y-auto">
            {userPrompts.map((prompt) => (
              <div key={prompt.id} className="flex flex-col space-y-2 p-4">
                <div className="flex items-center self-end w-12/12 md:max-w-2xl bg-slate-500 rounded-xl rounded-tr bg-blue-500 py-2 px-6 text-white">
                  <p className='  text-sm py-2'>{prompt.userPrompt}</p>
                </div>
                <div className="flex items-center self-start w-12/12 md:max-w-2xl rounded-xl rounded-tl bg-gray-300 py-2 px-6">
                  <p className='p-4 py-2 text-sm '>{prompt.response}</p>
                </div>
              </div>
            ))}
          </div>

          <Input
            placeholder="Enter Your Prompt here"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleSendClick}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;