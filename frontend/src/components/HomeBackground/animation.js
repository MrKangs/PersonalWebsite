import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
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

const HomeBackground = () => {
  const [background, setBackground] = useState({
    backgroundSky: [],
    object: '',
    isNight: false,
    textWhite: false,
  });
  const [stars, setStars] = useState([]);
  const [endPoint, setEndPoint] = useState(0);

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
    let endDegreePercentage = 0;
    const currentHour = moment().hour();
    const minutePercentage = moment().minute() / 60;

    if (currentHour >= 0 && currentHour < 4) {
      setBackground({
        backgroundSky: ['16__20__m','20__24','0__4'],
        object: 'moon',
        isNight: true,
        textWhite: true,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) + 90;
    } else if (currentHour >= 4 && currentHour < 6) {
      setBackground({
        backgroundSky: ['16__20__m','20__24', '0__4', '4__8__m'],
        object: 'moon',
        isNight: true,
        textWhite: true,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) + 90;
    } else if (currentHour >= 6 && currentHour < 7) {
      setBackground({
        backgroundSky: ['4__8__s'],
        object: 'sun',
        isNight: true,
        textWhite: true,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 90;
    } else if (currentHour >= 7 && currentHour < 8) {
      setBackground({
        backgroundSky: ['4__8__s'],
        object: 'sun',
        isNight: false,
        textWhite: false,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 90;
    } else if (currentHour >= 8 && currentHour < 12) {
      setBackground({
        backgroundSky: ['4__8__s', '8__12'],
        object: 'sun',
        isNight: false,
        textWhite: false,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 90;
    } else if (currentHour >= 12 && currentHour < 16) {
      setBackground({
        backgroundSky: ['4__8__s', '8__12', '12__16'],
        object: 'sun',
        isNight: false,
        textWhite: false,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 90;
    } else if (currentHour >= 16 && currentHour < 18) {
      setBackground({
        backgroundSky: ['4__8__s', '8__12', '12__16', '16__20__s'],
        object: 'sun',
        isNight: false,
        textWhite: false,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 90;
    } else if (currentHour >= 18 && currentHour < 19) {
      setBackground({
        backgroundSky: ['16__20__m'],
        object: 'moon',
        isNight: false,
        textWhite: true,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 270;
    } else if (currentHour >= 19 && currentHour < 20) {
      setBackground({
        backgroundSky: ['16__20__m'],
        object: 'moon',
        isNight: true,
        textWhite: true,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 270;
    } else if (currentHour >= 20 && currentHour < 24) {
      setBackground({
        backgroundSky: ['16__20__m', '20__24'],
        object: 'moon',
        isNight: true,
        textWhite: true,
      });
      endDegreePercentage = 15 * (currentHour + minutePercentage) - 270;
    }

      setEndPoint(endDegreePercentage);

      generateStars();
  };
  

  useEffect(() => {
    updateBackground();
  }, []);

  const riseAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(${endPoint}deg);
    }
  `;

  const RiseElement = styled.div`
    position: fixed;
    bottom: 0;
    left: 5%;
    width: 95%;
    height: 30%;
    overflow: hidden;
    animation: 1 ${riseAnimation} 10s forwards ease-in-out;
    z-index: -4;
  `;

  const textColor = background.textWhite ? '#fff' : '#000';

  return (
    <>
      
      <GlobalStyle textColor={textColor} />
      <Navbar backgroundSky = {background.backgroundSky} />
      <div className="sky">
        {background.backgroundSky.map((phase, index) => (
          <div key={index} className={`sky__phase sky__${phase}`}></div>
        ))}
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
          {/* <div>
              {!background.isNight && (
              <div id="leaves">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i> 
              </div>
            )}
        </div> */}
        <RiseElement>
          <div className={`${background.object}`}></div>
        </RiseElement>
      </div>
    </>
      
  );
};

export default HomeBackground;
