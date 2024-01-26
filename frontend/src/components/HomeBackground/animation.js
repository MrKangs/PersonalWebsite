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
    const starCount = 33;
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

    if (currentHour >= 6 && currentHour < 7) {
      setBackground({
        backgroundSky: ['dawn'],
        object: '',
        isNight: true,
        textWhite: false,
      });
    } else if (currentHour >= 7 && currentHour < 12) {
      setBackground({
        backgroundSky: ['dawn'],
        object: 'sun',
        isNight: false,
        textWhite: false,
      });
      endDegreePercentage = 27 * (currentHour + minutePercentage) - 189;
    } else if (currentHour >= 12 && currentHour < 18) {
      setBackground({
        backgroundSky: ['dawn', 'noon'],
        object: 'sun',
        isNight: false,
        textWhite: true,
      });
      endDegreePercentage = 17 * (currentHour + minutePercentage) - 69;
    } else if (currentHour >= 18 && currentHour < 19) {
      setBackground({
        backgroundSky: ['dusk'],
        object: '',
        isNight: false,
        textWhite: true,
      });
    } else if (currentHour >= 19 && currentHour < 24) {
      setBackground({
        backgroundSky: ['dusk'],
        object: 'moon',
        isNight: true,
        textWhite: true,
      });
      endDegreePercentage = 27 * (currentHour + minutePercentage) - 513;
    } else {
      setBackground({
        backgroundSky: ['dusk', 'midnight'],
        object: 'moon',
        isNight: true,
        textWhite: true,
      });

      endDegreePercentage = 17 * (currentHour + minutePercentage) + 135;
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
    width: 90%;
    height: 90%;
    overflow: hidden;
    animation: linear 1 ${riseAnimation} 10s forwards;
  `;

  const textColor = background.textWhite ? '#fff' : '#000';

  return (
    <>
      <Navbar backgroundSky = {background.backgroundSky} />
      <GlobalStyle textColor={textColor} />
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
        <RiseElement>
          <div className={`${background.object}`}></div>
        </RiseElement>
      </div>
    </>
      
  );
};

export default HomeBackground;
