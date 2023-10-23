import React from "react";
import './section1-styles.css'

import logo from '../../assets/LOGO.png'
import profile from '../../assets/PERFIL.png'
import aboutme from '../../assets/CAIXA-DE-TEXTO.png'
import brush from '../../assets/BRUSH-3.png'


export default props =>{
    return(
        <div className="section1_container">
            {/* <img   className="section1_container_brush" src={brush} alt="brush" /> */}
            <div className="section1_container__header"> 
                <img className="section1_container__header_img" src={logo} alt="logo" />
            </div>
            <div className="section1_container__profile"> 
                <img className="section1_container__profile_picture" src={profile} alt="logo" />    
            </div>
            <div className="section1_container_aboutme">
                <img className="section1_container_aboutme__pic" src={aboutme} alt="descrição sobre mim" />
            </div>
        </div>
    )
}