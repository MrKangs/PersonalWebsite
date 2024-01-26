
import React, { useContext } from 'react';
import Social from './Social';
import Data from './Data';
import {HomeBackground} from '../../components';
import './Home.scss';
import { NightContext } from '../../contexts';

const Home = () => {

  const isNight = useContext(NightContext);

  return (
    <>
    <HomeBackground/>
    <section className='home section' id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          
          <div className="blank__div"></div>
          <Data />
          <div className={isNight ? 'home__img__night' : 'home__img'}></div>
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