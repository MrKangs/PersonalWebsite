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

    if (currentHour >= 0 && currentHour < 4) {
      setBackground({
        backgroundSky: '0__4',
        isNight: true,
        textWhite: true,
      });
    } else if (currentHour >= 4 && currentHour < 6) {
      setBackground({
        backgroundSky: '4__8',
        isNight: true,
        textWhite: true,
      });
    } else if (currentHour >= 6 && currentHour < 7) {
      setBackground({
        backgroundSky: '4__8',
        isNight: true,
        textWhite: true,
      });
    } else if (currentHour >= 7 && currentHour < 8) {
      setBackground({
        backgroundSky: '4__8',
        isNight: false,
        textWhite: false,
      });
    } else if (currentHour >= 8 && currentHour < 12) {
      setBackground({
        backgroundSky: '8__12',
        isNight: false,
        textWhite: false,
      });
    } else if (currentHour >= 12 && currentHour < 16) {
      setBackground({
        backgroundSky: '12__16',
        isNight: false,
        textWhite: false,
      });
    } else if (currentHour >= 16 && currentHour < 18) {
      setBackground({
        backgroundSky: '16__20',
        isNight: false,
        textWhite: false,
      });
    } else if (currentHour >= 18 && currentHour < 19) {
      setBackground({
        backgroundSky: '16__20',
        isNight: false,
        textWhite: true,
      });
    } else if (currentHour >= 19 && currentHour < 20) {
      setBackground({
        backgroundSky: '16__20',
        isNight: true,
        textWhite: true,
      });
    } else if (currentHour >= 20 && currentHour < 24) {
      setBackground({
        backgroundSky: '20__24',
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
      <div className={`sky__phase__d sky__${background.backgroundSky}__2`}></div>
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
