import React from 'react';

import './Rankings.scss';

export default function Rankings(props){
    const {data} = props;
    return (
        <>
        <div className='rankings'>
            <Ranking nombre={data[0].Escuela} posicion='1' />
            <Ranking nombre={data[0].Escuela2} posicion='2' />
            <Ranking nombre={data[0].Escuela3} posicion='3' />
            <Ranking nombre={data[0].Escuela4} posicion='4' />
            <Ranking nombre={data[0].Escuela5} posicion='5' />
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
                <div className='ranking__nombre'>{props.nombre}</div>
            </div>
        </div>
    )
}