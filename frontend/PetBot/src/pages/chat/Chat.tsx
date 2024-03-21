import { Key, useState } from 'react';
import Input from '../../components/ui/inputs/Input';

interface UserPrompt {
  id: number;
  userPrompt: string;
  response: string;
  prompt: string,
}

const initialUserPrompts: UserPrompt[] = [];

const Chat: React.FC = () => {
  const [userPrompts, setUserPrompts] = useState<UserPrompt[]>(initialUserPrompts);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await fetch('http://localhost:5000/get_bot_response', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: inputValue,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get response from the backend');
        }

        const data = await response.json();

        const newPrompt: UserPrompt = {
          id: userPrompts.length + 1,
          userPrompt: inputValue,
          response: data.response,
        };

        setUserPrompts([...userPrompts, newPrompt]);
        setInputValue('');
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="flex h-screen flex-col py-3 bg-slate-400  items-center mx-auto  justify-between ">
      {userPrompts.length === 0 && (
        <div className="absolute top-[50%]">
          <div className="self-center rounded-full">
            {/* <Logo /> */}
            <div className="">
              <p>What Can I do for you today?</p>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-y-auto lg:w-7/12">
        {userPrompts.map((prompt: { id: Key; userPrompt: string; response: string | number | boolean }) => (
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
      <div className="  right-0 w-11/12  ">
        <div className="">
          <Input
            placeholder="Enter Your Prompt here"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleSendClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
