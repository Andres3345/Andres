import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import agenda from "../img/agenda.jpg"
import "../carrusel.css"


const Carrusel = () => {
    const settings = {
        infinite: true,
      speed: 4000,
      slidesToShow: 3, // Número de elementos visibles por defecto
      slidesToScroll: 1, // Número de elementos para desplazar por defecto
      autoplay: true,
      autoplaySpeed: 3500,
      arrows: false,
     
      responsive: [
        {
          breakpoint: 1024, // Cambia las opciones en pantallas más grandes
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
          },
        },
        {
          breakpoint: 768, // Cambia las opciones en pantallas medianas
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      };

  return (
    
    <div className="carousel-container">
       
        <Slider {...settings}>
          <div className='divC'></div>
          <div className='divC'></div>
          <div className='divC'></div>
          <div className='divC'></div>
          <div className='divC'></div>
          
         
        </Slider>
      </div>
  )
}

export default Carrusel