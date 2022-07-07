import React from "react";
import '../css/About.css';
import boyAvatar from '../img/boyAvatar.png'

const About = () => {
  return (
    <section className='about-container'>
      <div className='about-title'>
        <h1>ABOUT ME</h1>
      </div>
      <div className='about-img'>
          <img src={boyAvatar} alt='me' />
      </div>
      <div className='about-content'>
        <div className='about-desc'>
          <h3>WHO AM I?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className="about-contact">
          <h3>RICARDO ZAMORA PICAZO</h3>
          <ul>
            <li>
              <div><span>EMAIL:</span>correo@correo.com</div>

            </li>
            <li>
              <span>email@email.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;