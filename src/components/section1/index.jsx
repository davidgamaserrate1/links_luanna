import { SlideFade } from "@chakra-ui/react";
import React from "react";
import aboutme from '../../assets/CAIXA-DE-TEXTO.png';
import esc from '../../assets/ESCRITAESPAÇADA.png';
import logo from '../../assets/LOGO.png';
import profile from '../../assets/PERFIL.png';
import projects_txt from '../../assets/TEXTO-ALGUNS-PROJETOS.png';
import projeto1 from '../../assets/projects/projeto1.png';
import projeto10 from '../../assets/projects/projeto10.png';
import projeto11 from '../../assets/projects/projeto11.png';
import projeto12 from '../../assets/projects/projeto12.png';
import projeto2 from '../../assets/projects/projeto2.png';
import projeto3 from '../../assets/projects/projeto3.png';
import projeto4 from '../../assets/projects/projeto4.png';
import projeto5 from '../../assets/projects/projeto5.png';
import projeto6 from '../../assets/projects/projeto6.png';
import projeto7 from '../../assets/projects/projeto7.png';
import projeto8 from '../../assets/projects/projeto8.png';
import projeto9 from '../../assets/projects/projeto9.png';
import Carousel from "../carrousel";
import './section1-styles.css';

const images = [
    {image: projeto1, description:'projeto1'},
    {image: projeto2, description:'projeto2'},
    {image: projeto3, description:'projeto3'},
    {image: projeto4, description:'projeto4'},
    {image: projeto5, description:'projeto5'},
    {image: projeto6, description:'projeto6'},
    {image: projeto7, description:'projeto7'},
    {image: projeto8, description:'projeto8'},
    {image: projeto9, description:'projeto9'},
    {image: projeto10, description:'projeto10'},
    {image: projeto11, description:'projeto11'},
    {image: projeto12, description:'projeto12'},
]

export default function Section1() {
    return(
        <div className="tessst">
            <SlideFade in offsetY='50vh' className="section1_container" >    
                <img className="escrita" src={esc} alt="escrita" />        
                <div className="section1_container__header"> 
                    <img className="section1_container__header_img" src={logo} alt="logo" />
                </div>
                <div className="section1_container__profile"> 
                    <img className="section1_container__profile_picture" src={profile} alt="minha foto" />    
                </div>
                <div className="section1_container_aboutme">
                    <img className="section1_container_aboutme__pic" src={aboutme} alt="descrição sobre mim" />
                </div>
                <div className="section1_container_projects">
                    <img className="section1_container_projects__pic" src={projects_txt} alt="alguns projetos" />
                </div>
                <div className="section1_container_carrousel">
                    <Carousel className="section1_container_projects__carrousel" 
                        images={images}
                        slides={3}
                        width={350}
                    />
                </div>
            </SlideFade>
        </div>
    )
}

