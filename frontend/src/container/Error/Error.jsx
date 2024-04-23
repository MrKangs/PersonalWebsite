import React, {useContext} from 'react'
import { Background } from '../../components';
import { NightContext } from '../../contexts';

const Error = () => {
    const isNight = useContext(NightContext);
    const textColor = {
        'color': isNight ? 'white' : 'black'
    };
  return (
    <>
    <Background/>
    <section className='error section' id="error">
      <div className="error__container container grid">
        <div className="error__content grid">
          <div className="error__header">
            <h1 className="error__title" style={textColor}>Error</h1>
          </div>
          <div className="error__list grid">
            <p className="error__description" style={textColor}>This page does not exist or cannot be found.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Error