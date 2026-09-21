import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export const SkyGlobalStyle = createGlobalStyle`
  header {
    color: ${(props) => props.textColor};
  }

  body {
    color: ${(props) => props.textColor};
    margin: 0;
    padding: 0;
  }
`;

export const useStars = (count = 69) => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const starsArray = Array.from({ length: count }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(starsArray);
  };

  return [stars, generateStars];
};
