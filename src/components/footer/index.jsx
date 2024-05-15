import React from "react";
import './footer-styles.css'
import footer from '../../assets/LOGO.png'

const Footer =() =>{
    return(
        <div className="footer">
            <img className="footer_logo" src={footer} alt="imagem rodapé" />
        </div>
    )
}

export default Footer