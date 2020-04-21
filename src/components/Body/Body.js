import React from 'react';
import Footer from '../Footer';

import './Body.scss';

export default function Body(){
    return(
        <div className="Body" >
                <img src="./Img/Logo2.png" alt="Logo" id="LogoBody" height="42%" width="18%" position="absolute"/>
                <p id="texta">Welcome to EducationHub / Bienvenido a EducationHub</p>
                <p id="textb">Herramientas para la educación</p><br></br><br></br>
                <Footer />
        </div>

    )
}