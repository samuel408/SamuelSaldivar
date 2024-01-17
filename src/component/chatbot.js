import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Button } from 'react-bootstrap';


const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [botReply, setBotReply] = useState('');
  const [chatVisible, setChatVisible] = useState(false);


  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/chat', // Change this URL to your backend endpoint
        {
          prompt: userInput,
        }
      );

      setBotReply(response.data.trim());
    } catch (error) {
      console.error('Error communicating with the backend API', error);
    }
  };
  const toggleChatVisibility = () => {
    setChatVisible(!chatVisible);
  };
  return (
    <div>
      {chatVisible && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          padding: '10px',
          zIndex: 999,
        }}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
          <div>
            <p>User: {userInput}</p>
            <p>Bot: {botReply}</p>
          </div>
        </div>
      )}
      <Button
      variant=""
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#D48166',
          color: '#fff',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 999,
        }}
        onClick={toggleChatVisibility}
      >
        {chatVisible ? 'Hide Chat' : 'need help?'}
      </Button>
    </div>
  );
};

export default ChatBot;
