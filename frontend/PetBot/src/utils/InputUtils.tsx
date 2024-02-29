export const handleInputChange = (event, setInputValue) => {
    setInputValue(event.target.value);
  };
  

  export const handleSendClick = (inputValue, setUserPrompts, setInputValue) => {
    if (inputValue.trim() !== '') {
      const newPrompt = {
        id: userPrompts.length + 1,
        userPrompt: inputValue,
        response: "How can I help you?"
      };
  
      setUserPrompts([...userPrompts, newPrompt]);
      setInputValue('');
    }
  };
  