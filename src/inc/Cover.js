import React from 'react';
import "../css/Cover.css";

const Cover = () => {
  return (
    <header className='cover-container'>
      <div className='name'>
        <div className='wrapper-name'>
          <div data-aos="fade-down">
            <h1>Ricardo Zamora Picazo</h1>
          </div>
          <hr/>
          <div data-aos="fade-up">
            <p>Desarrollador Web</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Cover;
