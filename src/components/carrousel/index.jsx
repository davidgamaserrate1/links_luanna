import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay,Pagination,Navigation } from 'swiper/modules';

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/effect-fade';

import './carrousel-styles.css' 
 
const Carousel = ({ images, ...props }) => {
  let widthVar = props.width || '200'

  return (
    <div className="slider" style={{width: `${widthVar}px`}}  >
      <Swiper 
        slidesPerView={props.slides}
        spaceBetween={8}
        centeredSlides={true}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        style={{color:'#fff',}}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false 
        }}      
      >
        {images.map((image, index)=>
          <SwiperSlide key={index} >
            <img src={image.image}  className="img" alt={image.description}/>          
          </SwiperSlide>    
          )
        }
      </Swiper>
    </div>
  );
};

export default Carousel;
