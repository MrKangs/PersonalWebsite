import './Foods.scss';
import { Background } from '../../components';
import { client, urlFor } from '../../client';
import React, { useState, useEffect } from 'react';
import PhotoAlbum from "react-photo-album";
import {getImageDimensions} from '@sanity/asset-utils'

const Foods = () => {
  const [foodOverview, setFoodOverview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "food"]';
    client.fetch(query).then((foodOverview) => {
      setFoodOverview(foodOverview);
      console.log(foodOverview);
      console.log(urlFor(foodOverview[0].image).url());
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div><Background /></div>;
  }

  const foodPhotos = [];

  foodOverview.map((food, index) => {
    const {_, height, width} = getImageDimensions(food.image);
    foodPhotos.push({
      src: urlFor(food.image).url(),
      width: width,
      height: height,
      link: food.link,
    });
  });

  return (
    <div>
      <Background />
      <section className='foods section' id="foods">
        <div className="foods__gallery">
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

export default Foods;
