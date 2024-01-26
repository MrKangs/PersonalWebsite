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

    if (skyPhase === 'dawn') {
      return {
        backgroundColor: 'rgba(244, 220, 138, 1)',
      };
    } else if (skyPhase === 'noon') {
      return {
        backgroundColor: 'rgba(174, 215, 229, 1)',
      };
    } else if (skyPhase === 'dusk') {
      return {
        backgroundColor: 'rgba(211, 26, 107, 1)',
      };
    } else if (skyPhase === 'midnight') {
      return {
        backgroundColor: 'rgba(6, 2, 38, 1)',
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
        <a href='/' className={Toggle ? '': 'nav__logo'} style={textColor}>Mr.Kangs</a>

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