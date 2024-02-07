import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.scss';
import { Background } from '../../components';
import { NightContext } from '../../contexts';
import { client, urlFor } from '../../client';
import Error from '../Error/Error';

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
              <h2 className="project-details__subtitle" style={textColor}>{project.subtitle}</h2>
              <h3 className="project-details__date" style={textColor}>{project.startdate} to {project.enddate}</h3>
              <img src={urlFor(project.image)} alt="Project" className="project-details__img" />
              <div>
                <h3 className="project-details__skills" style={textColor}>Skills</h3>
                {project.skills.map((skill, index) => (
                  <tag key={index} className="project-details__skill" style={textColor}>{skill}</tag>
                ))}
              </div>
              <div>
                <h3 className="project-details__description" style={textColor}>Description</h3>
                {project.description.map((paragraph, index) => (
                  <p key={index} className="project-details__description" style={textColor}>{paragraph}</p>
                ))}
              </div>
              <div>
                <h3 className="linkTitle" style={textColor}>References</h3>
              {project.links.map((link, index) => (
                <a key={index} href={link} target="_blank" rel="noreferrer" className="project-details__link">
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
