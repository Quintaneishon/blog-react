import React from 'react';

import { FaFacebook,FaGithub,FaUserGraduate,FaLinkedinIn } from "react-icons/fa";
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
            <Dev nombre='Naruto 5 Daniel'>
                <a className='icon' href='https://www.facebook.com/' target='_blank'> 
                    <FaFacebook />
                </a>
                <a className='icon' href='https://github.com/' target='_blank'> 
                    <FaGithub />
                </a>
                <a className='icon' href='' target='_blank'> 
                    <FaUserGraduate />
                </a>
                <a className='icon' href='https://www.linkedin.com/' target='_blank'> 
                    <FaLinkedinIn />
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