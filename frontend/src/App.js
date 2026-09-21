import './App.scss'
import React, { useState, useEffect } from 'react'
import {Home, About, Gallary, Projects, ProjectDetails, Error} from './container';
import {Route, Routes, HashRouter} from 'react-router-dom';
import {Navbar} from './components'
import {NightContext} from './contexts'

const App = () => {

  const [whiteText, setWhiteText] = useState(false);

  const getNight = () => {
    const currentHour = new Date().getHours();
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
