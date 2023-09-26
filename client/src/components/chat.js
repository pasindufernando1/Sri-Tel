import React, { useState } from 'react';
import '../styles/style.css';

function Chat() {
    const defaultQuestions = [
        "How can I contact support?",
        "Tell me more about your services.",
        "Where can I view my current and past bills on the Sri-Care platform?",
        "How can I make online payments for my telecommunications services?",
        "How can I view my payment history?",
        "What payment methods are accepted for online bill payments?",
        "How do I set up email notifications for my account?",
        "What are the customer care agents' working hours for live chat support?"
    ];

    const [chatMessages, setChatMessages] = useState([
        { text: "Hello! How can I help you?", className: "message" },
    ]);

    const handleQuestionClick = (question) => {
        setChatMessages([...chatMessages, { text: question, className: "message user" }]);
    };

    return (
        <div>
            <h2>Chat</h2>
            <div className="chat-container">
                <div className="chat-messages">
                    {chatMessages.map((message, index) => (
                        <div key={index} className={message.className}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <br />
                <hr/>
                <div className="default-questions">
                    {defaultQuestions.map((question, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuestionClick(question)}
                            className="question-button"
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chat;
