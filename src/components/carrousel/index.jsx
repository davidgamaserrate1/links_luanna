import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay,Pagination,Navigation } from 'swiper/modules';

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/effect-fade';

import './carrousel-styles.css' 
 
const Carousel2 = ({images}) => {
  return (
    <div className="slider">
      <Swiper 
        slidesPerView={3}
        spaceBetween={8}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{color:'#fff',}}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false 
        }}      
      >
        {images.map((image, index)=>(
          <SwiperSlide key={index} >
            <img src={image}  className="img" alt='Banner do projeto' />          
          </SwiperSlide>    
          ))
        }
      </Swiper>
    </div>
  );
};

export default Carousel2;
