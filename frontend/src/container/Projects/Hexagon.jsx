import React from 'react';
import { Link } from 'react-router-dom';
import './Hexagon.scss'; // Make sure to create an SCSS file for this

const Hexagon = ({ title, description, image, link }) => {
  return (
    <div className="hexagon-wrapper">
      <Link to={link} className="hexagon-link">
        <div className="hexagon" style={{ backgroundColor: 'yellow' }}>
          <div className="hexagon-image" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
        <div className="hexagon-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Hexagon;
