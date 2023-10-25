import React from "react";
import './footer-styles.css'

import footer from '../../assets/LOGO.png'


const Footer =() =>{
    return(
        <div className="footer">
            <img src={footer} alt="imagem rodapé" className="footer_logo" />
        </div>
    )
}

export default Footer