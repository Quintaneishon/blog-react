import React from 'react';
import Footer from '../Footer';

import './Body.scss';

export default function Body(){
    return(
        <div className="Body" >
                <img src="./Img/Logo2.png" alt="Logo" id="LogoBody" height="42%" width="18%" position="absolute"/>
                <h1 id="texta">Welcome to EducationHub / Bienvenido a EducationHub</h1>
                <h2 id="textb">Herramientas para la educación</h2>
                <h5 id="textc">Aquí encontrarás muchas Herramientas que te ayudarán, <br></br> orientarán y facilitarán en el desarrollo de tu educación a lo largo de tu carrera </h5>
                <Footer />
        </div>

    )
}