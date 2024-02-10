import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.scss';
import { Background } from '../../components';
import { NightContext } from '../../contexts';
import { client, urlFor } from '../../client';
import Error from '../Error/Error';
import Typewriter from 'typewriter-effect';

const ProjectDetails = () => {
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(true);
  const isNight = useContext(NightContext);
  const { slug } = useParams();

  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "project" && slug.current == "${slug}"]`;
        const details = await client.fetch(query);
        if (details.length === 0) {
          throw new Error('Project not found');
        }
        setProject(details[0]);
      } catch (error) {
        console.error('Error fetching project details:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [slug]);

  const handleTypewriterInit = (typewriter) => {
    let typewriterInstance = typewriter.changeDelay(15);
    project.description.forEach((paragraph, i) => {
      typewriterInstance = typewriterInstance.typeString(paragraph);
      if (i < project.description.length - 1) {
        typewriterInstance = typewriterInstance.pauseFor(10).typeString('<br><br>');
      }
    });
    typewriterInstance.start();
  };
    

  
  if (loading) {
    return <div><Background /></div>;
  }
  
  if (!project) {
    return <Error />;
  }

  return (
    <>
      <Background />
      <section className='project-details section' id="project-details">
        <div className="project-details__container container grid">
          <div className="project-details__content grid">
            <div className="project-details__data">
              <h1 className="project-details__title" style={textColor}>{project.title}</h1>
              <p className="project-details__subtitle" style={textColor}>{project.subtitle}</p>
              <h3 className="project-details__date" style={textColor}>From {project.startdate} to {project.enddate}</h3>
              <img src={urlFor(project.image)} alt="Project" className="project-details__img" />
              <div className='project-details__description'>
                <h3 className="project-details__description__title" style={textColor}>Description</h3>
                <div className="project-details__description__paragraphs">
                  <Typewriter
                    onInit={handleTypewriterInit}
                    options={{
                      deleteSpeed: 20,
                      delay: 0,
                      loop: false,
                    }}
                  />
                </div>
              </div>
              <div className='project-details__others'>
                <h3 className="project-details__skills__title" style={textColor}>Skills</h3>
                {project.skills.map((skill, index) => (
                  <tag key={index} className="project-details__skills__values" style={textColor}>{skill}</tag>
                ))}

                <h3 className="project-details__references__title" style={textColor}>References</h3>
                {project.links.map((link, index) => (
                  <a key={index} href={link} target="_blank" rel="noreferrer" className="project-details__references__links">
                  {link}
                </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
