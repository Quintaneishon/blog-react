import React from 'react';
import Footer from '../Footer';
import './Body.scss';

export default function Body(){
    return(
        <div className="Body" >
            <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
                <source src={`/Img/video.mp4`} type='video/mp4'></source>
                Your browser is not supported!
            </video>
        </div>
                <img src="./Img/IconoSistemas.svg" alt="Logo" id="LogoBody" height="42%" width="18%" position="absolute"/>
                <div className="texthome">
                    <h1 id="texta">Welcome to EducationHub / Bienvenido a EducationHub</h1>
                    <h2 id="textb">Herramientas para la educación</h2>
                    <h5 id="textc">Aquí encontrarás muchas Herramientas que te ayudarán, <br></br> orientarán y facilitarán en el desarrollo de tu educación a lo largo de tu carrera </h5>
                </div>
                <Footer />
        </div>

    )
}
