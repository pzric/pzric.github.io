import React from "react";
import '../css/About.css';
import boyAvatar from '../img/boyAvatar.png';

const About = () => {
  return (
    <section className="about-container">
      <div className='about-title'>
        <h1>ACERCA DE MI</h1>
      </div>
      <div className='about-img'>
          <img src={boyAvatar} alt='me' />
      </div>
      <div className='about-content'>
        <div className='about-desc'>
          <h3>QUIEN SOY?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className="about-contact">
          <h3>RICARDO ZAMORA PICAZO</h3>
          <ul>
            <li>
              <div><strong>Correo:</strong> ricardozp88@gmail.com</div>
            </li>
            <li>
             <div><strong>Celular:</strong> +522462396638</div>
            </li>
            <li>
             <div><strong>Ciudad:</strong> Tlaxcala, Mexico</div>
            </li>
            <li>
             <div><strong>Idiomas:</strong> Español</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;