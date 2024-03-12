// Bee.js
import React from 'react';
import './Bee.scss';

const Bee = () => {
  return (
    <div className="bee-container">
      {/* Render multiple bee components for background */}
      <div className="bee" />
      <div className="bee" />
      <div className="bee" />
      {/* Add more bees as needed */}
    </div>
  );
};

export default Bee;
