import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: 'bot', text: 'Hello! How can I assist you with university guidance today?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Function to handle user input
  const handleUserInput = (e) => setUserInput(e.target.value);

  // Function to simulate chatbot response
  const handleSendMessage = () => {

    setMessages([...messages, { user: 'user', text: userInput }]);
    setIsBotTyping(true);

    let botResponse = '';
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes('admission')) {
      botResponse = 'The admission deadline for the September intake is June. Visit the admissions page for details.';
    } else if (lowerCaseInput.includes('courses')) {
      botResponse = 'Popular courses include Business Management, Engineering, Medicine, and IT. Check our website for a full list.';
    } else if (lowerCaseInput.includes('scholarship')) {
      botResponse = 'Scholarship opportunities are available. Visit our Scholarships section for more details.';
    } else if (lowerCaseInput.includes('visa')) {
      botResponse = 'We assist with Tier 4 visa applications, including document preparation and interview coaching.';
    } else if (lowerCaseInput.includes('contact')) {
      botResponse = 'You can contact us via email, phone, or WhatsApp. Visit the Contact Us page for details.';
    } else {
      botResponse = 'I’m sorry, I didn’t understand that. Could you please rephrase or choose a quick option below?';
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

  // Handle sending message when pressing Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Toggle chat window visibility
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      {!isChatOpen && (
        <div className="bot-icon" onClick={toggleChat}>
          <img src="https://img.icons8.com/ios/452/bot.png" alt="bot" />
        </div>
      )}

      {isChatOpen && (
        <div className='chatbot-container'>
          <div className="chatbot-header">
            <h3>University Guidance Chatbot</h3>
            <div>
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
            <button onClick={() => setUserInput('Tell me about visa requirements')}>Visa Guidance</button>
            <button onClick={() => setUserInput('How can I contact you?')}>Contact</button>
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={handleKeyPress} // Added this event handler
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
