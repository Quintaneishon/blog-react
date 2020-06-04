import React from 'react';

import './Rankings.scss';

export default function Rankings(props){
    const {data} = props;
    return (
        <>
        <div className='rankings'>
            <Ranking nombre={data[0].Escuela} posicion='1' link={data[0].Link}/>
            <Ranking nombre={data[1].Escuela} posicion='2' link={data[1].Link}/>
            <Ranking nombre={data[2].Escuela} posicion='3' link={data[2].Link}/>
            <Ranking nombre={data[3].Escuela} posicion='4' link={data[3].Link}/>
            <Ranking nombre={data[4].Escuela} posicion='5' link={data[4].Link}/>
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