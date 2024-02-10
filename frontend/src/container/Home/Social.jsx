import React, {useState, useEffect} from 'react'
import { NightContext } from '../../contexts';
import { client } from '../../client';

const Social = () => {
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
    <div className="home__social">
        <a href={home[0]["links"][0]} className="home__social-icon uil uil-linkedin" target="_blank" rel="noreferrer" style={textColor}></a>
        <a href={home[0]["links"][1]} className="home__social-icon uil uil-github-alt" target="_blank" rel="noreferrer" style={textColor}></a>
        <a href={home[0]["links"][2]} className="home__social-icon uil uil-instagram" target="_blank" rel="noreferrer" style={textColor}></a>
        <a href={home[0]["links"][3]} className="home__social-icon uil uil-envelope" target="_blank" rel="noreferrer" style={textColor}></a>
    </div>
  )
}

export default Social