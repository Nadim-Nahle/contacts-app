import React from 'react';
import landing from '../img/landing.jpg';
import phone from '../img/phone.png';

const Landing = () => {
  return (
    <div className="landing-background" style={{background: `url(${landing})`}}>
        <div className="landing">
            <h1>Welcome to Contacts</h1>
            <img className='phone-img' src={phone} alt='phone' />
        </div>
    </div>   
  )
}

export default Landing;