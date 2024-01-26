import React from 'react'
import { NightContext } from '../../contexts';

const Social = () => {
  const isNight = React.useContext(NightContext);

  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/kennethleekang/" className="home__social-icon uil uil-linkedin" target="_blank" rel="noreferrer" style={textColor}></a>
        <a href="https://www.linkedin.com/in/kennethleekang/" className="home__social-icon uil uil-github-alt" target="_blank" rel="noreferrer" style={textColor}></a>
        <a href="https://www.linkedin.com/in/kennethleekang/" className="home__social-icon uil uil-instagram" target="_blank" rel="noreferrer" style={textColor}></a>
        <a href="https://www.linkedin.com/in/kennethleekang/" className="home__social-icon uil uil-envelope" target="_blank" rel="noreferrer" style={textColor}></a>
    </div>
  )
}

export default Social