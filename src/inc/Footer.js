import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <h1>name</h1>
        <p>Base in </p>
      </div>
      <div className='footer-contact'>
        <h3>Contact me</h3>
        <p>andaknsda</p>
      </div>
      <div className='footer-sns'>
        <div className='design-by'>
          Design bt name
        </div>
        <div className='sns-links'>
          <a href='https://google.com' target='_blank' rel='noreferrer'>
            <i className="fa-brands fa-github icon1"></i>
          </a>  
          <a href='https://google.com' target='_blank' rel='noreferrer'>
            <i className="fa-brands fa-github icon2"></i>
          </a>
          <a href='https://google.com' target='_blank' rel='noreferrer'>
          <i className="fa-brands fa-github icon3"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer