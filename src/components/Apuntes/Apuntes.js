import React, { useState } from 'react';

import './Apuntes.scss';

export default function Apuntes(props){
    const {data} = props;
    console.log(data);
    let materias=[];
    for (var j=0; j < data.length; j++) {
        let esta = -1;
        for (var i=0; i < materias.length; i++) {
            if (materias[i].id === data[j].Id_materia[0]) {
                esta = i;
            }
        }
        if(esta > -1){
            materias[esta].nombre.push(data[j].Nombre);
            materias[esta].imagen.push(data[j].Imagen);
        }else{
            materias.push({id:data[j].Id_materia[0],titulo:data[j].Titulo,nombre:[data[j].Nombre],dificultad:data[j].Dificultad,imagen:[data[j].Imagen]});
        }
    }

    return(
        <div className='apuntes__container'>
            {materias.map((apunte,index) =>(
                <Item apunte={apunte} key={index} />
            ))}
        </div>
    )
}

function Item(props){
    const{apunte} = props;
    const[active,setActive] = useState(false);
    console.log(active)
    return (
        <div className='apuntes__item'  >
            <div className='apuntes__nombre' onClick={()=> setActive(!active)}>
                <div className='apuntes__titulo'>{apunte.titulo}</div>
                <div className='apuntes__dificultad'>
                    <svg className='apuntes__alert'>
                    <use xlinkHref='../Icons/sprite.svg#icon-notification'/>
                    </svg>
                    <div className='apuntes__rango'>{apunte.dificultad}/<span>5</span></div>
                </div>
                <div className='apuntes__button' >
                    <svg className='apuntes__flecha'>
                        {active
                            ? <use xlinkHref='../Icons/sprite.svg#icon-chevron-thin-down'/>
                            : <use xlinkHref='../Icons/sprite.svg#icon-chevron-thin-up'/>}
                    </svg>
                </div>
            </div>
            <Apunte nombres={apunte.nombre} imagenes={apunte.imagen} active={active} />
        </div>
    )
}

function Apunte(props){
    const {nombres,imagenes,active} = props;
    let code = [];
    for (let i=0;i<nombres.length;i++){
        code.push(<li className='apuntes__lista-item' key={i} onClick={() => window.open(`/apuntes/${imagenes[i]}`) } >
            <div className='apuntes__lista__name' >{nombres[i]}</div>
            </li>);
    }

    return(
        <ul className={'apuntes__lista' + (active ? ' apuntes__lista--active' : '')}>
            {code}
        </ul>
    )
}