import React from "react";
import './cardlinks-styles.css'

const CardLink = (props) =>{
    return(
       <a href={props.link} 
          target="_blank" 
          className={props.last ?"card_link_last" : "card_link"}
        >
            <img  className="card_link_img" src={props.image} alt={props.description} />
       </a>
    )
}

export default CardLink