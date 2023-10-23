import React, { useState, useEffect } from 'react';

import './carrousel-styles.css'

import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../assets/projects/projeto1.png'
import img2 from '../../assets/projects/projeto2.png'
import img3 from '../../assets/projects/projeto3.png'

const Carousel2 = () => {
  return (
    
    <Carousel prevLabel={null} prevIcon={null} nextIcon={null}  nextLabel ={null} className='carrousel'>
     

     <Carousel.Item  >
         
          <img src={img1} alt="" />
          <img src={img2} alt="" />        
          <img src={img3} alt="" />        
        
      </Carousel.Item>
      <Carousel.Item>
        <div className="carrousel_item">
          <img   className="carrousel_item1" src={img1} alt="" />
          <img className="carrousel_item1"  src={img2} alt="" />        
          <img className="carrousel_item1"  src={img3} alt="" />        
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carrousel_item">
          <img src={img1} alt="" />
          <img src={img2} alt="" />        
          <img src={img3} alt="" />        
        </div>
      </Carousel.Item>
      
  
     
       
    </Carousel>
 
  );
};

export default Carousel2;
