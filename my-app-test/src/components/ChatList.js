// src/components/ChatList.js
import React from 'react';

const ChatList = ({ data }) => {
  return (
    <div className="chat-list">
      {data.map((contact, index) => (
        <div className="chat-contact" key={index}>
          <img src={contact.image} alt={contact.name} className="contact-image" />
          <div className="contact-info">
            <h2 className="contact-name">{contact.name}</h2>
            {/* <p className="contact-message">{contact.status || contact.message}</p> */}
            <p className="contact-message">{contact.message}</p>

          </div>
          <div className="contact-time">
            {new Date(contact.receive_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            {contact.unread_message > 0 && (
              <div className="unread-badge">{contact.unread_message}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
