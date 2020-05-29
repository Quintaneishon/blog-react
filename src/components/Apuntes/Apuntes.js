import React from 'react';

import './Apuntes.scss';

export default function Apuntes(props){
    
    return(
        <div className='apuntes__container'>
            <div className='apuntes__item'>
                <div className='apuntes__nombre apuntes__nombre-activo'>crypto<svg className='apuntes__icon'><use xlinkHref='../Icons/sprite.svg#icon-chevron-thin-down'/></svg></div>
                <Apunte />
            </div>
        </div>
    )
}

function Apunte(props){
    return(
        <ul className='apuntes__lista'>
            <li className='apuntes__lista-item'>prueba1</li>
            <li className='apuntes__lista-item'>prueba2</li>
            <li className='apuntes__lista-item'>prueba3</li>
        </ul>
    )
}