import React from 'react';

import './Cursos.scss';

export default function Cursos(props){
    const {data} = props;
    return(
        <div className='cursos'>
            {data.map((dato,i) => <Curso key={i} curso={dato} />)}
        </div>
    )
}

function Curso(props){
    const { curso:{
        Nombre,
        Link,
        Descripcion,
        Costo,
        Imagen}} = props;
    
    return(
        <div className='curso'>
            <div className='curso__head'>
                <img alt={"Imagen "+ Nombre} src={Imagen}/>
            </div>
            <div className='curso__body'>
                <div className='curso__detalles'>
                    <div className='curso__detalles-nombre'>
                        {Nombre}
                    </div>
                    <div className='curso__detalles-costo'>
                        {Costo ? (`De pago`)  : ('Gratis')}
                    </div>
                </div> 
                <div className='curso__descripcion'>
                    {Descripcion}
                </div>
                <div className='curso__footer'>
                    <a className='btn-inline' href={Link} target='__blank'>
                        Saber mas &rarr;
                    </a>
                </div>
            </div>
        </div>

    )
}