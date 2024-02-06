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
    return <div>Loading...</div>;
  }
  
  if (!project) {
    return <Error />;
  }

  return (
    <>
      <Background />
    </>
  );
};

export default ProjectDetails;
