import { client } from '../../client';
import React, {useEffect, useState} from 'react'
import { NightContext } from '../../contexts';
import Typewriter from 'typewriter-effect';


const Data = () => {
  const isNight = React.useContext(NightContext);

  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  const [home, sethome] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "profile"]'

    client.fetch(query)
      .then((data) => {
        sethome(data);
        setLoading(false);})
    }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="home__data" >
        <h1 className="home__title" style={textColor}>{home[0]["name"]}</h1>
        <h3 className="home__subtitle" style={textColor}>{home[0]["title"]}</h3>
        <div className="home__description">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(home[0]["shortbio"])
                .pauseFor(3000)
                .deleteAll(12)
                .typeString("Check out this page on a <strong>different time</strong> for a different background experience!")
                .pauseFor(2000)
                .deleteAll(12)
                .start();
            }}
            options={
              {
                loop: true,
                delay: 30
              }
            }
          />
        </div>
    </div>
  )
}

export default Data