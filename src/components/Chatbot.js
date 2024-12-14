import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your virtual assistant. How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);  // This will be used to scroll to the bottom

  // Function to handle user input and send a message
  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add the user's message to the conversation
    setMessages(prevMessages => [
      ...prevMessages,
      { text: userInput, sender: "user" }
    ]);

    // Generate bot's response based on user input
    const botResponse = generateBotResponse(userInput);

    // Add the bot's response to the conversation
    setMessages(prevMessages => [
      ...prevMessages,
      { text: botResponse, sender: "bot" },
    ]);

    // Clear input field after sending
    setUserInput('');
  };

  // Function to generate a response based on user input
  const generateBotResponse = (input) => {
    const query = input.toLowerCase();

    if (query.includes("workout") || query.includes("exercise")) {
      return "Here are some popular workout plans you can try:\n- Full Body Workout\n- Cardio Blast\n- Strength Training\nLet me know if you'd like more details!";
    } else if (query.includes("recipe") || query.includes("meal")) {
      return "I can suggest some delicious recipes! What type of meal are you interested in? You can ask for breakfast, lunch, dinner, or snacks.";
    } else if (query.includes("lose weight")) {
      return "For losing weight, I suggest a balanced diet with plenty of lean protein, vegetables, and whole grains. Let me know if you need a specific meal plan!";
    } else if (query.includes("gain weight")) {
      return "To gain weight, you'll want to focus on calorie-dense foods like nuts, avocados, and whole grains. Would you like a meal plan for this?";
    } else if (query.includes("motivation")) {
      const motivationalQuotes = [
        "Believe you can and you're halfway there.",
        "It does not matter how slowly you go as long as you do not stop.",
        "The only bad workout is the one that didn't happen.",
        "Push yourself, because no one else is going to do it for you."
      ];
      return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    } else if (query.includes("mindfulness")) {
      return "Mindfulness can help you stay calm and focused. Try deep breathing, meditation, or focusing on the present moment to relieve stress and improve mental well-being.";
    } else if (query.includes("fitness goals")) {
      return "Some common fitness goals include: \n- Weight loss\n- Muscle gain\n- Endurance training\nLet me know what your goal is, and I'll help you create a plan!";
    } else if (query.includes("sleep")) {
      return "Sleep is crucial for recovery and overall health. Aim for 7-9 hours of quality sleep each night to support your fitness goals.";
    } else if (query.includes("healthy eating")) {
      return "Eating a balanced diet with whole foods is key to maintaining a healthy body. Focus on lean proteins, healthy fats, and lots of vegetables!";
    } else if (query.includes("faq")) {
      return "Here are some common questions I can help with: \n- 'What is the best workout for weight loss?'\n- 'How do I gain muscle mass?' \n- 'Can you give me a healthy recipe?'";
    } else if (query.includes("help")) {
      return "I'm here to help! You can ask me about workouts, recipes, customer support, or anything else. Just type your question!";
    } else {
      return "I'm sorry, I didn't quite catch that. Could you ask something like 'Give me a workout plan' or 'What recipes can I make?'";
    }
  };

  // Scroll to the bottom of the messages whenever new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "bot" ? "bot-message" : "user-message"}>
              <p>{msg.text}</p>
            </div>
          ))}
          {/* Empty div to push content down when scrolling */}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-container">
          <input 
            type="text" 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
            placeholder="Ask me anything!" 
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
