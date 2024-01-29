// src/App.js
import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import ChatList from './components/ChatList';
import StoryPreview from './components/StoryPreview';
import './App.css';
import data from './materials/sample.json'; // Adjust the path to your sample data

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input changes
  const handleSearchChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter chat list based on search term
  const filteredChatList = data.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchTerm) || 
      chat.message.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <AppHeader onSearch={handleSearchChange} />
      <StoryPreview />
      <ChatList data={filteredChatList} /> {/* Pass the filtered data */}
    </div>
  );
};

export default App;

