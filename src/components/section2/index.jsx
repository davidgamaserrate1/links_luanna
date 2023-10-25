import React from "react";
import './section2-styles.css'
import CardLink from "../cardLink";

import botao1 from '../../assets/section2/BOTAO1.png'
import botao2 from '../../assets/section2/BOTAO2.png'
import botao3 from '../../assets/section2/BOTAO3.png'
import feedbacks from '../../assets/section2/FEEDBACKS.png'
import links from '../../assets/section2/LINKS.png'
import print1 from '../../assets/section2/PRINT1.png'
import print2 from '../../assets/section2/PRINT2.png'
import print3 from '../../assets/section2/PRINT3.png'
import print4 from '../../assets/section2/PRINT4.png'
import BorderDivider from "../cardLink/borderDivider";
import Carousel from "../carrousel/index.jsx";

const linksBtn = [
    {description: 'link behance', image: botao1, link:'https://www.behance.net/luannadesigner1' ,last: false},
    {description: 'link behance', image: botao2, link:'https://www.behance.net/luannadesigner' ,last: false},
    {description: 'link orçamento', image: botao3 , link:'https://wa.me/5567981232612' ,last: true},
]

const feedbacksImgs =[
    {description: "print1", image:print1},
    {description: "print2", image:print2},
    {description: "print3", image:print3},
    {description: "print4", image:print4},
]

// link behance 1: https://www.behance.net/luannadesigner1
// link behance 2: https://www.behance.net/luannadesigner 
// link orçamento: wa.me/5567981232612

const Section2 = ()=>{
    return(
    <>
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
            
        </div>
    </>
    )
}

export default Section2