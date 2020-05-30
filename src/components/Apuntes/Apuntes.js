import React from 'react';

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
                <div className='apuntes__item' key={index}>
                    <div className='apuntes__nombre apuntes__nombre-activo'>
                        {apunte.titulo}
                        <svg className='apuntes__icon'>
                            <use xlinkHref='../Icons/sprite.svg#icon-chevron-thin-down'/>
                        </svg>
                    </div>
                    <Apunte nombres={apunte.nombre} imagenes={apunte.imagen} />
                </div>
            ))}
        </div>
    )
}

function Apunte(props){
    const {nombres,imagenes} = props;
    let code = [];
    for (let i=0;i<nombres.length;i++){
        code.push(<li className='apuntes__lista-item' key={i}>{`${nombres[i]} - ${imagenes[i]}`}</li>);
    }

    return(
        <ul className='apuntes__lista'>
            {code}
        </ul>
    )
}