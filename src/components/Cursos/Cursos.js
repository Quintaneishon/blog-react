import React from 'react';

import './Cursos.scss';

export default function Cursos(props){
    const {data} = props;
    return(
        <div className='cursos'>
            {data.map(dato => <Curso key={dato.id} curso={dato} />)}
        </div>
    )
}

function Curso(props){
    const { curso:{
        nombre,
        link,
        descripcion,
        costo,
        imagen}} = props;
    
    return(
        <div className='curso'>
            <div className='curso__head'>
                <img alt={"Imagen "+ nombre} src={imagen}/>
            </div>
            <div className='curso__body'>
                <div className='curso__detalles'>
                    <div className='curso__detalles-nombre'>
                        {nombre}
                    </div>
                    <div className='curso__detalles-costo'>
                        {costo ? (`De pago`)  : ('Gratis')}
                    </div>
                </div> 
                <div className='curso__descripcion'>
                    {descripcion}
                </div>
                <div className='curso__footer'>
                    <a className='btn-inline' href={link} target='__blank'>
                        Saber mas &rarr;
                    </a>
                </div>
            </div>
        </div>

    )
}