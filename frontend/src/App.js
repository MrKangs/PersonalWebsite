import './App.scss'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import {Home, About, Foods, Projects, ProjectDetails, Error} from './container';
import {Route, Routes, Switch, HashRouter} from 'react-router-dom';
import {Navbar, ParticlesComponent} from './components'
import {NightContext} from './contexts'

const App = () => {

  const [whiteText, setWhiteText] = useState(false);

  const getNight = () => {
    const currentHour = moment().hour();
    if  (currentHour >= 7 && currentHour <18) {
      setWhiteText(false);
    } else {
      setWhiteText(true);
    }
  }

  useEffect(() => {
    getNight();
  }, []);

  return (
    <div className="App">
      

      {/* <ParticlesComponent /> */}

      <NightContext.Provider value={whiteText}>
        <Navbar />
        <Routes className='main'>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galleries" element={<Foods />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </NightContext.Provider>

    </div>
  )
}


export default App;
