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

  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((about) => {
      setAbout(about);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return <div><Background/></div>;
  }

  return (
    <div>
    <Background/>
    <section className='about section' id="about">
      <div className="about__container container grid">
      <h1 className="about__title" style={textColor}>{about[0].title}</h1>
        <div className="about__content grid">
        <img src={urlFor(about[0].image)} alt="my Profile Picture" className="about__img"/>
          <div className="about__data">
            {about[0].bio.map((paragraph, index) => (
              <p key={index} className="about__p" style={textColor}>{paragraph}</p>
            ))
            }
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About