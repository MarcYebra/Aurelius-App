import React, { useState } from 'react';
import GenerateInterviewButton from './GenerateInterviewButton';

const sendMessageToBackend = async (userInput) => {
  try {
    const response = await fetch('http://localhost:3000/chat', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: userInput }),
    });

    if (!response.ok) throw new Error('Error communicating with the backend.');

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error:', error);
    return 'An error occurred. Please try again.';
  }
};

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return; 

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const aiResponse = await sendMessageToBackend(input);

    const aiMessage = { role: 'assistant', content: aiResponse };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);

    setInput('');
  };

  return (
    <div className="chatbox-center">
        <div className="chatbox-input">
          <textarea
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste job description here..."
            className='text-area'
          />
        </div>
          <GenerateInterviewButton onClick={handleSend} />
      </div>
  );
};

export default ChatBox;