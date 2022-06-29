import React from 'react';
import "../css/Cover.css";
import webDesign from '../img/webDesign.jpg';


const Cover = () => {
  return (
    <div className='cover-container'>
      <img className='image' src={webDesign} alt='Simple logo' />
      <h1>Ricardo Zamora Picazo</h1>
      <p>Developer jr | Developer jr</p>
    </div>
  )
}

export default Cover