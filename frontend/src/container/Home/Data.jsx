import React from 'react'
import { NightContext } from '../../contexts';

const Data = () => {
  const isNight = React.useContext(NightContext);

  const textColor = {
    'color': isNight ? 'white' : 'black'
  };

  return (
    <div className="home__data" >
        <h1 className="home__title" style={textColor}>Kenneth Kang</h1>
        <h3 className="home__subtitle" style={textColor}>Data Scientist/Data Analyst</h3>
        <p className="home__description" style={textColor}>Hello! My name is Kenneth Kang! It is a pleasure seeing you here on my personal website. I post my projects on what I have done, food posts that I have either visited or made by myself, and my resume. Hope you find this website useful to you.</p>
    </div>
  )
}

export default Data