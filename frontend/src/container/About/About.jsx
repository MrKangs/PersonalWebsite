import React, { useState, useEffect, useContext } from 'react';
import './About.scss';
import { Background } from '../../components';
import { client, urlFor } from '../../client';
import { NightContext } from '../../contexts';
import Typewriter from 'typewriter-effect';
import {PortableText} from '@portabletext/react';

const About = () => {
  const isNight = useContext(NightContext);
  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "about"]';
        const aboutData = await client.fetch(query);
        setAbout(aboutData);
        console.log(about[0].title, about[0].title2);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTypewriterTitleInit = (typewriter) => {
    typewriter
    .typeString(about[0].title1)
    .pauseFor(2000)
    .deleteChars(18)
    .typeString(about[0].title2)
    .pauseFor(2000)
    .deleteAll(12)
    .start();
  };

  if (loading) {
    return <div><Background /></div>;
  }

  return (
    <div>
      <Background />
      <section className='about section' id="about">
        <div className="about__container container grid">
          <h1 className="about__title" style={textColor}>
            <Typewriter
              onInit={handleTypewriterTitleInit}
              options={{
                deleteSpeed: 12,
                delay: 30,
                loop: true,
              }}
            />
          </h1>
          <div className="about__content grid">
            <div className="about__data">
              <div className="about__data__card grid">
                <div className="about__paragraph" id='intro'>
                  <PortableText value={about[0].intro} />
                </div>
                <img src={urlFor(about[0].image1)} alt="my Student Picture" className="about__img" />
              </div>
              <div className="about__data__card grid">
                <img src={urlFor(about[0].image2)} alt="my Work Picture" className="about__img" />
                <div className="about__paragraph">
                  <PortableText value={about[0].work} />
                </div>
              </div>
              <div className="about__data__card grid">
                <div className="about__paragraph">
                  <PortableText value={about[0].skills} />
                </div>
                <img src={urlFor(about[0].image3)} alt="my Skills Picture" className="about__img" />
              </div>
              <div className="about__data__card grid">
                <img src={urlFor(about[0].image4)} alt="my Hobbies Picture" className="about__img" />
                <div className="about__paragraph">
                  <PortableText value={about[0].hobbies} />
                </div>
              </div>
              <div className="about__data__card grid">
                <div className="about__paragraph">
                  <PortableText value={about[0].goals} />
                </div>
                <img src={urlFor(about[0].image5)} alt="my Goals Picture" className="about__img" />
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;