import React, { useState, useEffect, useContext } from 'react';
import './about.scss'
import { Background } from '../../components'
import { client, urlFor } from '../../client';
import { NightContext } from '../../contexts';

const About = () => {
  const isNight = useContext(NightContext);
  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((about) => {
      setAbout(about);
      setLoading(false);
    });
  }, []);

  console.log(about[0]['bio'][0]['children'][0]['text']);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <Background/>
    <section className='about section' id="about">
      <div className="about__container container grid">
        <div className="about__content grid">
          <div className="about__data">
            <h1 className="about__title" style={textColor}>About Me</h1>
            {/* <p className="about__description" style={textColor}>{about[0].description}</p> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About