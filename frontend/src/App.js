import './App.scss'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import {Home, About, Gallary, Projects, ProjectDetails, Error} from './container';
import {Route, Routes, HashRouter} from 'react-router-dom';
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
      <HashRouter>
        <Navbar />
        <Routes className='main'>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galleries" element={<Gallary />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
      </NightContext.Provider>

    </div>
  )
}


export default App;
