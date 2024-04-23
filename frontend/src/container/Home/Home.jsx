import React, { useState, useEffect } from 'react';
import Social from './Social';
import Data from './Data';
import {HomeBackground} from '../../components';
import './Home.scss';
import {client, urlFor} from '../../client';

const Home = () => {

  const [home, sethome] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query)
      .then((data) => {
        sethome(data);
        setLoading(false);})
    }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <>
    
    <section className='home section' id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          
          <div className="blank__div"></div>
          <Data />
          <div className='home__img'>
            <img src={urlFor(home[0].image)} alt="my Profile Picture" />
          </div>
          <div className="blank__div"></div>
          <div className="blank__div"></div>
          <Social />
          

        </div>
      </div>
    </section>
    <HomeBackground/>
    </>
    
    
  )
}

export default Home