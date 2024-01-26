import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { createGlobalStyle } from 'styled-components';
import './animation.css';
import Navbar from '../Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  header {
    color: ${(props) => props.textColor};
  }

  body {
    color: ${(props) => props.textColor};
    margin: 0;
    padding: 0;
  }
  `
  ;

const Background = () => {
  const [background, setBackground] = useState({
    backgroundSky: '',
    isNight: false,
    textWhite: false,
  });
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const starCount = 69;
    const starsArray = [];

    for (let i = 0; i < starCount; i++) {
      const star = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      };
      starsArray.push(star);
    }

    setStars(starsArray);
  };

  const updateBackground = () => {
    const currentHour = moment().hour();

    if (currentHour >= 6 && currentHour < 7) {
      setBackground({
        backgroundSky: 'dawn',
        isNight: true,
        textWhite: false,
      });
    } else if (currentHour >= 7 && currentHour < 12) {
      setBackground({
        backgroundSky: 'dawn',
        isNight: false,
        textWhite: false,
      });
    } else if (currentHour >= 12 && currentHour < 18) {
      setBackground({
        backgroundSky: 'noon',
        isNight: false,
        textWhite: true,
      });
    } else if (currentHour >= 18 && currentHour < 19) {
      setBackground({
        backgroundSky: 'dusk',
        isNight: false,
        textWhite: true,
      });
    } else if (currentHour >= 19 && currentHour < 24) {
      setBackground({
        backgroundSky: 'dusk',
        isNight: true,
        textWhite: true,
      });
    } else {
      setBackground({
        backgroundSky: 'midnight',
        isNight: true,
        textWhite: true,
      });

    }

    generateStars();
  };
  

  useEffect(() => {
    updateBackground();
  }, []);


  const textColor = background.textWhite ? '#fff' : '#000';

  return (
    <div>
      <GlobalStyle textColor={textColor} />
      <Navbar backgroundSky = {background.backgroundSky} />
      <div className="sky">
        <div className={`sky__phase__d sky__${background.backgroundSky}__d`}></div>
        <div>
          {background.isNight && (
            <div className="stars">
              {stars.map((star, index) => (
                <div
                  key={index}
                  className="star"
                  style={{
                    top: star.top,
                    left: star.left,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Background;
