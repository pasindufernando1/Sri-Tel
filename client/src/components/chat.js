import React from 'react';
import '../styles/style.css';

function chat() {
    return (
        <div>
            <h2>Chat</h2>
            <div className="chat-container">
                <div className="chat-messages">
                    <div className="message">Hello! How can I help you?</div>
                    <div className="message user">Hi! I have a question.</div>
                    <div className="message">Sure, go ahead and ask.</div>
                </div>
                <br/>
                <form className="message">
                    <input type="text" placeholder="Type your message..."/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
}

export default chat;
