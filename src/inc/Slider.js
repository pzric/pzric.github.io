import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../css/Slider.css';
import Slides from '../js/Slides.js';

const Slider = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <h2>My projects</h2>
      </div>
      <Carousel
        itemWidth = {400}
        animationSpeed = {200}
        offset = {50}
        plugins={[
          'arrows',
          'clickToChange', 
          'infinite',
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
            numberOfSlides: 3
            }
          },
        ]}
        breakpoints = {{
          960: {
            itemWidth : 250,
            offset : 50,
            plugins: [
              'infinite',        
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,                   
                }
              },
            ]
          }
        }}
        slides={Slides}
       />
    </div>
  )
}

export default Slider