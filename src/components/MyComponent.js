// src/components/MyComponent.js
import React from 'react';
import myImage from '../assets/my-image.jpg';

function MyComponent() {
  return (
    <div>
      <h1>My Picture</h1>
      <img src={myImage} alt="Description of image" style={{ width: '300px' }} />
    </div>
  );
}

export default MyComponent;
