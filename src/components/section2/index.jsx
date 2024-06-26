import './section2-styles.css'

import Bg from "../bg/index.jsx";
import CardLink from "../cardLink";
import Carousel from "../carrousel/index.jsx";
import Footer from "../footer";
import React from "react";
import botao1 from '../../assets/section2/BOTAO1.png'
import botao2 from '../../assets/section2/BOTAO2.png'
import botao3 from '../../assets/section2/BOTAO3.png'
import feedbacks from '../../assets/section2/FEEDBACKS.png'
import links from '../../assets/section2/LINKS.png'
import print1 from '../../assets/section2/PRINT1.png'
import print2 from '../../assets/section2/PRINT2.png'
import print3 from '../../assets/section2/PRINT3.png'
import print4 from '../../assets/section2/PRINT4.png'

const linksBtn = [
    {description: 'link behance', image: botao1, link:'https://www.behance.net/luannadesigner1' ,last: false},
    {description: 'link behance', image: botao2, link:'https://www.behance.net/luannadesigner' ,last: false},
    {description: 'link orçamento', image: botao3 , link:'https://wa.me/5567991019613?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento.' ,last: true},
]

const feedbacksImgs =[
    {description: "print1", image:print1},
    {description: "print2", image:print2},
    {description: "print3", image:print3},
    {description: "print4", image:print4},
]

const Section2 = ()=>{
    return(
    <Bg>
        <div className="section2_container">
            <img className="section2_container_links_images" src={links} alt="imagem de links" />   
            <div className="section2_container_cards">
                {linksBtn.map((item)=>
                    <CardLink 
                        image={item.image} 
                        description={item.description} 
                        link={item.link}
                        last={item.last}
                    />)}
            </div>
            <img className="section2_container_feedback_text" src={feedbacks} alt="feedbacks" />
            <div className="section_feedbacks">
                <div className="section2_container_feedbacks">
                    <div className="section2_container_messages">
                        <Carousel className="section2_container_feedback_mesage" 
                            images={feedbacksImgs}
                            slides={1}                        
                            />                        
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    </Bg>
   
    )
}

export default Section2