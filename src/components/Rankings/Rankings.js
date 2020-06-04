import React from 'react';

import './Rankings.scss';

export default function Rankings(props){
    const {data} = props;
    return (
        <>
        <div className='rankings'>
            {data.map((dato,index) => 
                <Ranking key={index} nombre={dato.nombre} posicion={dato.posicion} link={dato.link}/>
            )}
        </div>
        <p className='creditos'>Datos obtenidos del estudio realizado en 2020 por MEXTUDIA <a href='https://mextudia.com/' target='__blank' className='btn-inline'>Saber mas &rarr;</a></p>
        </>
    )
}

function Ranking(props){
    return(
        <div className={`ranking top-${props.posicion}`}>
            <div className='ranking__container'>
                <div className='ranking__posicion'>{props.posicion}</div>
                <div><a className='ranking__nombre' href={props.link} target="_blank">{props.nombre}</a></div>
            </div>
        </div>
    )
}