import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../css/Slider.css';
import Slides from '../js/Slides.js';

const Slider = () => {
  return (
    <div className='carousel-container'>
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
            numberOfSlides: 2,
            }
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 1
               }
             },
           ]
          },
          900: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 2
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