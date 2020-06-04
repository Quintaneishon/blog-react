import React from 'react';

import { FaFacebook,FaGithub,FaUserGraduate,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import './Footer.scss';

export default function Footer(){

    return(
        <footer className='footer'>
            <div className='footer__row'>
                <div className='footer__logo-box'>
                    <img src='../Img/devcows.png' alt='Full logo' className='footer__logo' />
                </div>
                <div className='footer__navigation'>
                    <div className='footer__name u-margin-bottom-small'>Ajitzi R. Quintana Ruiz</div>
                    <ul className='footer__list'>
                        <li className='footer__item'><a href='https://www.facebook.com/ajitzi.quintana' target='_blank' className='footer__link'><FaFacebook /></a></li>
                        <li className='footer__item'><a href='https://github.com/Quintaneishon' target='_blank' className='footer__link'><FaGithub /></a></li>
                        <li className='footer__item'><a href='https://quintaneishon.github.io/personal-page/' target='_blank' className='footer__link'><FaUserGraduate /></a></li>
                        <li className='footer__item'><a href='https://www.linkedin.com/in/ajitzi-ricardo-quintana-ruiz-385a61138/' target='_blank' className='footer__link'><FaLinkedinIn /></a></li>
                    </ul>
                </div>
                <div className='footer__navigation'>
                    <div className='footer__name u-margin-bottom-small'>Daniel Vaca Ramírez</div>
                    <ul className='footer__list'>
                        <li className='footer__item'><a href='https://www.facebook.com/naruto5daniel' target='_blank' className='footer__link'><FaFacebook /></a></li>
                        <li className='footer__item'><a href='https://github.com/DanielRamirezX' target='_blank' className='footer__link'><FaGithub /></a></li>
                        <li className='footer__item'><a href='https://www.linkedin.com/in/daniel-vaca-ramirez-797438194/' target='_blank' className='footer__link'><FaUserGraduate /></a></li>
                        <li className='footer__item'><a href='https://twitter.com/DanielVacaR' target='_blank' className='footer__link'><FaLinkedinIn /></a></li>
                    </ul>
                </div>
                <div className='footer__copyright'>
                    Esta página fue creada para fines didacticos, de aprendizaje y apoyo a la educación. Se usaron diferentes herramientas encontradas en este <a href='http://codingheroes.io/resources/' target='_blank' className='footer__link'>sitio</a> El uso de esta pagina es abierto para todo el que desee copiar el diseño. Favor de dar los respectivos creditos a los desarrolladores aqui mencionados.
                </div>
            </div>
            <div className='text-align footer__footer'>
                Hecho en México. &copy; 2020 DevCows, Inc. &nbsp;&nbsp;Terms of Service &nbsp;&nbsp;Privacy Policy &nbsp;&nbsp;Legal
            </div>
            <div>
                <a style={{alignSelf:'center',borderBottom:'none'}} className='btn-inline' href="https://icons8.com/" target='_blank'>Icons by Icons8</a>
            </div>
        </footer>
    )
}
