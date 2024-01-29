// src/components/StoryPreview.js
import React from 'react';
import './StoryPreview.css';
 import cameraIcon from "./../materials/camera.png";

// Dummy data for story previews
const stories = [
  { id: 1, image: "https://dummyimage.com/100x100/000/fff", name: "Alice" },
  { id: 2, image: "https://dummyimage.com/500x400/000/fff", name: "Bob" },
  { id: 3, image: "https://dummyimage.com/600x400/000/fff", name: "Charlie" },

];

const StoryPreview = () => {
  return (
    <div className="story-preview-container">
      <div className="create-story-button">
        <div className="outer-circle">
          <div className="inner-circle">
            <img src={cameraIcon} alt="Create story" className="camera-icon" />
          </div>
          <div className="plus-container">
            <div className="plus-background">
              <div className="plus-icon">+</div>
            </div>
          </div>
        </div>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <div className="story-image-container">
            <img src={story.image} alt={story.name} className="story-image" />
          </div>
          <div className="story-name">{story.name}</div>
        </div>
      ))}
    </div>
  );
};

export default StoryPreview;




