import React from 'react';

import { FaFacebook,FaGithub,FaUserGraduate,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import './Footer.scss';

export default function Footer(){

    return(
        <div className='footer'>
            <img src='./Img/devcows.png' width='35' height='35' /><br></br><span className='footer__name'>DevCows </span><br></br>
            <Dev nombre='Ajitzi R. Quintana Ruiz'>
                <a className='icon' href='https://www.facebook.com/ajitzi.quintana' target='_blank'> 
                    <FaFacebook />
                </a>
                <a className='icon' href='https://github.com/Quintaneishon' target='_blank'> 
                    <FaGithub />
                </a>
                <a className='icon' href='https://quintaneishon.github.io/personal-page/' target='_blank'> 
                    <FaUserGraduate />
                </a>
                <a className='icon' href='https://www.linkedin.com/in/ajitzi-ricardo-quintana-ruiz-385a61138/' target='_blank'> 
                    <FaLinkedinIn />
                </a>
            </Dev>
            <Dev nombre='Carlos D. Vaca Ramírez'>
                <a className='icon' href='https://www.facebook.com/naruto5daniel' target='_blank'> 
                    <FaFacebook />
                </a>
                <a className='icon' href='https://github.com/DanielRamirezX' target='_blank'> 
                    <FaGithub />
                </a>
                <a className='icon' href='' target='_blank'> 
                    <FaUserGraduate />
                </a>
                <a className='icon' href='https://www.linkedin.com/in/daniel-vaca-ramirez-797438194/' target='_blank'> 
                    <FaLinkedinIn />
                </a>
                <a className='icon' href='https://twitter.com/DanielVacaR' target='_blank'>
                    <FaTwitter />
                </a>
            </Dev>
        </div>
    )
}

function Dev(props){
    const {nombre} = props

    return(
        <div className='dev'>
            <span className='dev__name'>{nombre}</span><br></br>
            {props.children}
        </div>
    )
}