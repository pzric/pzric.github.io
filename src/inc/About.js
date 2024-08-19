import React from "react";
import '../css/About.css';
import avatar from '../img/avatar.png';

const About = () => {
  return (
    <section className='about-container'>
      <div className='about-title' data-aos='fade-down'>
        <h1>ACERCA DE MI</h1>
      </div>
      <div className='about-content' data-aos='fade-left'>
        <div className='about-img'>
          <img src={avatar} alt='me' />
        </div>
        <div class='about-body'>
          <div className='about-desc'>
            <h3>ACERCA DE MI</h3>
            <p>Soy Ingeniero en Sistemas especializado en desarrollo BackEnd, con una sólida experiencia en el diseño y consumo de API REST. He trabajado con diversas bases de datos como MySQL, SQL Server y PostgreSQL, integrándolas con frameworks robustos como Laravel y Spring Boot. Mi pasión por el aprendizaje continuo me impulsa a estar siempre al tanto de las últimas tecnologías, permitiéndome crear soluciones eficientes y escalables en el ámbito del desarrollo web.</p>
            <p>Mi objetivo profesional es seguir creciendo y aportar soluciones innovadoras en la ingeniería de software, contribuyendo al éxito de los proyectos en los que participo.</p>
          </div>
          <div className='about-contact'>
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
                <div><strong>Idiomas:</strong> Español/Inlges(Intermedio)</div>
               </li>
            </ul>
          </div>
        </div>
       </div>
    </section>
  );
};

export default About;