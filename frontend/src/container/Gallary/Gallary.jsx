import './Gallary.scss';
import { Background } from '../../components';
import { client, urlFor } from '../../client';
import React, { useState, useEffect } from 'react';
import PhotoAlbum from "react-photo-album";
import {getImageDimensions} from '@sanity/asset-utils'

const Gallary = () => {
  const [gallaryOverview, setGallaryOverview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "gallary"]';
    client.fetch(query).then((gallaryOverview) => {
      setGallaryOverview(gallaryOverview);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div><Background /></div>;
  }

  const foodPhotos = [];

  gallaryOverview.map((gallary, index) => {
    const {_, height, width} = getImageDimensions(gallary.image);
    foodPhotos.push({
      src: urlFor(gallary.image).url(),
      width: width,
      height: height,
      link: gallary.link,
    });
  });

  return (
    <div>
      <Background />
      <section className='gallary section' id="gallary">
        <div className="image__gallery">
          <PhotoAlbum 
            photos={foodPhotos} 
            layout="masonry" 
            renderPhoto={props => (
              <a href={props.photo.link} style={props.wrapperStyle} target="_blank" rel="noreferrer">
                {props.renderDefaultPhoto(props)}
              </a>
            )}
          />
        </div>
      </section>
    </div>
  );
};

export default Gallary;
