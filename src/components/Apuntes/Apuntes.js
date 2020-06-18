import React, { useState } from 'react';

import './Apuntes.scss';

export default function Apuntes(props){
    const {data} = props;
    return(
        <div className='apuntes__container'>
            {data.map(materia =>(
                <Item materia={materia} key={materia.id} />
            ))}
        </div>
    )
}

function Item(props){
    const{materia} = props;
    const[active,setActive] = useState(false);
    return (
        <div className='apuntes__item'  >
            <div className='apuntes__nombre' onClick={()=> setActive(!active)}>
                <div className='apuntes__titulo'>{materia.nombre}</div>
                <div className='apuntes__dificultad'>
                    <svg className='apuntes__alert'>
                    <use xlinkHref='../Icons/sprite.svg#icon-notification'/>
                    </svg>
                    <div className='apuntes__rango'>{materia.dificultad}/<span>5</span></div>
                    <span className="tooltip">Dificultad</span>
                </div>
                <div className='apuntes__button' >
                    <svg className='apuntes__flecha'>
                        {active
                            ? <use xlinkHref='../Icons/sprite.svg#icon-chevron-thin-down'/>
                            : <use xlinkHref='../Icons/sprite.svg#icon-chevron-thin-up'/>}
                    </svg>
                </div>
            </div>
            <ul className={'apuntes__lista' + (active ? ' apuntes__lista--active' : '')}>
            {materia.apuntes.map( (apunte,index) =>
                <Apunte key={index} titulo={apunte.titulo} imagen={apunte.imagen}/>
            )}
            </ul>
        </div>
    )
}

function Apunte(props){
    const click = (imagen) => {
        window.location.href='#popup';
        document.getElementById('popup__content').innerHTML =`<embed src="/apuntes/${imagen}" width="100%" height="100%" type="application/pdf" />`;
    };

    return(
        <li className='apuntes__lista-item' onClick={() => click(props.imagen) } >
            <div className='apuntes__lista__name' >{props.titulo}</div>
        </li>
    )
}