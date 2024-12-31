import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: 'bot', text: 'Hello! How can I assist you with university guidance today?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle user input
  const handleUserInput = (e) => setUserInput(e.target.value);

  // Function to simulate chatbot response
  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { user: 'user', text: userInput }]);
    setIsBotTyping(true);

    let botResponse = '';
    if (userInput.toLowerCase().includes('admission')) {
      botResponse = 'The admission deadline for this semester is December 15th. Please apply before that!';
    } else if (userInput.toLowerCase().includes('courses')) {
      botResponse = 'We offer undergraduate and postgraduate courses in Computer Science, Business, Engineering, and more.';
    } else if (userInput.toLowerCase().includes('scholarship')) {
      botResponse = 'You can apply for various scholarships by visiting the Scholarships section on our website.';
    } else {
      botResponse = 'I’m sorry, I didn’t understand that. Could you please rephrase?';
    }

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'bot', text: botResponse },
      ]);
      setIsBotTyping(false);
    }, 1200);

    setUserInput('');
  };

  // Toggle chat window visibility
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      {!isChatOpen && (
        <div className="bot-icon" onClick={toggleChat}>
          <img src="https://img.icons8.com/ios/452/bot.png" alt="bot" />
        </div>
      )}

      {isChatOpen && (
        <div className={`chatbot-container ${darkMode ? 'dark' : ''}`}>
          <div className="chatbot-header">
            <h3>University Guidance Chatbot</h3>
            <div>
              <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button className="close-btn" onClick={toggleChat}>–</button>
            </div>
          </div>

          <div className="chatbot-body">
            <div className="messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.user === 'bot' ? 'bot' : 'user'}`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
              {isBotTyping && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          </div>

          <div className="quick-replies">
            <button onClick={() => setUserInput('Tell me about admissions')}>Admissions</button>
            <button onClick={() => setUserInput('What courses are available?')}>Courses</button>
            <button onClick={() => setUserInput('How can I apply for scholarships?')}>Scholarships</button>
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
