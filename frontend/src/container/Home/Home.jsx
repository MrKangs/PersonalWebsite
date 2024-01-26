
import React, { useContext } from 'react';
import Social from './Social';
import Data from './Data';
import {HomeBackground} from '../../components';
import './Home.scss';
import { NightContext } from '../../contexts';

const Home = () => {

  const isNight = useContext(NightContext);

  console.log(isNight);

  const imageBorderColor = {
    'boxShadow': isNight ? 'inset 0 0 0 9px rgb(255, 255, 255)' : 'inset 0 0 0 9px rgb(0, 0, 0)'
  };

  return (
    <>
    <HomeBackground/>
    <section className='home section' id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          
          <div className="blank__div"></div>
          <Data />
          <div className="home__img" style={imageBorderColor}></div>
          <div className="blank__div"></div>
          <div className="blank__div"></div>
          <Social />
          

        </div>
      </div>
    </section>
    </>
    
    
  )
}

export default Home