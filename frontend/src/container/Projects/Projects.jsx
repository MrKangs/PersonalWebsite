import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import { Background } from '../../components';
import {client, urlFor} from '../../client';
import { NightContext } from '../../contexts';

const Projects = () => {
  const [projectOverview, setProjectOverview] = useState([]);
  const [loading, setLoading] = useState(true);

  const isNight = useContext(NightContext);

  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  useEffect(() => {
    const query = '*[_type == "project_overview"]';
    client.fetch(query).then((projectOverview) => {
      setProjectOverview(projectOverview);
      setLoading(false);})
    }, []);
  
  if (loading) {
    return <div><Background /></div>;
  }

  return (
    <div>
        <Background/>
        <section className='projects section' id="projects">
          <div className="projects__container container grid">
            <div className="projects__content grid">
              <div className="projects__header">
                <h1 className="projects__title" style={textColor}>Projects</h1>
              </div>
              <div className="projects__list grid">
                {projectOverview.map((project, index) => (
                  <div className="project__card" key={index}>
                    <Link to={`/projects/${project.slug.current}`}>
                      <div className="projects__information">
                        <h2 className="project__title" style={textColor}>{project.title}</h2>
                        <p className="project__description" style={textColor}>{project.description}</p>
                      </div>
                      <img src={urlFor(project.image).url()} alt="" className="project__img"/>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Projects