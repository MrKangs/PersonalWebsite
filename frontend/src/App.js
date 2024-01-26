import './App.scss'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import {Home, About, Foods, Projects, Resume} from './container';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Navbar, ParticlesComponent} from './components'
import {NightContext} from './contexts'




const App = () => {

  const [whiteText, setWhiteText] = useState(false);

  const getNight = () => {
    const currentHour = moment().hour();
    if (currentHour >= 6 && currentHour < 7) {
      setWhiteText(false);
    } else if (currentHour >= 7 && currentHour < 12) {
      setWhiteText(false);
    } else if (currentHour >= 12 && currentHour < 18) {
      setWhiteText(false);
    } else if (currentHour >= 18 && currentHour < 24) {
      setWhiteText(true);
    } else if (currentHour >= 0 && currentHour < 6) {
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
      <BrowserRouter>
        <Navbar />
        <Routes className='main'>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      </NightContext.Provider>

    </div>
  )
}

export default App;
