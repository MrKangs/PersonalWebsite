import { client } from '../../client';
import React, {useEffect, useState} from 'react'
import { NightContext } from '../../contexts';


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
        <p className="home__description" style={textColor}>{home[0]["shortbio"]}</p>
    </div>
  )
}

export default Data