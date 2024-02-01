import React, {useState, useEffect, useContext} from 'react'
import './Navbar.scss'
import { NightContext } from '../../contexts';

const Navbar = ({backgroundSky}) => {

  const[Toggle, showMenu] = useState(false);

  const isNight = useContext(NightContext);

  const updateToggleBasedOnWindowSize = () => {
    if(window.innerWidth > 768) {
      showMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateToggleBasedOnWindowSize);
    return () => {
      window.removeEventListener('resize', updateToggleBasedOnWindowSize);
    }
  }
  , []);

  
  const textColor = {
    color: isNight ? 'white' : 'black'
  };

  const getSkyPhaseColor = () => {
    let skyPhase = '';

    if (Array.isArray(backgroundSky) && backgroundSky.length > 0) {
      skyPhase = backgroundSky.slice(-1)[0];
    } else {
      skyPhase = backgroundSky;
    }

    if (skyPhase === '12__16') {
      return {
        backgroundColor: 'rgba(184, 222, 241, 1)',
      };
    } else if (skyPhase === '16__20__m' || skyPhase === '16__20__s') {
      return {
        backgroundColor: 'rgba(176, 157, 154, 1)',
      };
    } else if (skyPhase === '20__24') {
      return {
        backgroundColor: 'rgba(83, 86, 137, 1)',
      };
    } else if (skyPhase === '0__4') {
      return {
        backgroundColor: 'rgba(11, 3, 28, 1)',
      };
    } else if (skyPhase === '4__8__s' || skyPhase === '4__8__m') {
      return {
        backgroundColor: 'rgba(217, 214, 207, 1)',
      };
    } else if (skyPhase === '8__12') {
      return {
        backgroundColor: 'rgba(218, 225, 219, 1)',
      };
    }
  };

  const toggleMenuColor = getSkyPhaseColor();

  const menuColor = {
    backgroundColor: 'transparent'
  };

  return (
    <header className="header">
      <nav className='nav container'>
        <a href='/' className='nav__logo' style={textColor}>Mr.Kangs</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} style={Toggle ? toggleMenuColor :  menuColor} >
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='/about' className={'nav__link'} style={textColor}>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='/resume'style={textColor} className='nav__link' >
                <i className='uil uil-file-alt nav__icon'></i> Resume
              </a>
            </li>
            <li className='nav__item'>
              <a href='/projects' className='nav__link' style={textColor}>
                <i className='uil uil-code-branch nav__icon'></i> Projects
              </a>
            </li>
            <li className='nav__item'>
              <a href='/foods' className='nav__link' style={textColor}>
                <i className='uil uil-utensils-alt nav__icon'></i> Foods
              </a>
            </li>
          </ul>
          <i className='uil uil-times nav__close' id='nav-close' style={textColor} onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className='uil uil-apps' id='nav-toggle' style={textColor}></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar