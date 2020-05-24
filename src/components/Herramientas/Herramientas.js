import React from 'react';

import './Herramientas.scss';

export default function Herramientas(props){
    const {data} = props;
    console.log(data)
    return(
        <div className='herramientas'>
            {data.map((dato,i) => <Herramienta key={i} herr={dato} />)}
        </div>
    )
}

function Herramienta(props){
    console.log(props.herr);

    const { herr:{
        Nombre,
        Link,
        Icono,
        Descripcion,
        Pros,
        Contras,
        Costo}} = props;
    
    return(
        <div className='herramienta'>
            <div className='herramienta__head'>
                <img src={`${Icono}`} width="100%" height="100%"></img>
            </div>
            <div className='herramienta__body'>
                <div className='herramienta__nombre'>
                    {Nombre}
                    <span className='herramienta__costo'>
                        {Costo}
                    </span>
                </div>
                <div className='herramienta__descripcion'>
                    {Descripcion}
                </div>
                <div className='herramienta__opiniones'>
                    <div className='herramienta__opiniones__pros'>
                        {Pros}
                    </div>
                    <div className='herramienta__opiniones__contras'>
                        {Contras}
                    </div>
                </div>
                <a className='btn-inline' href={Link} target='__blank'>
                    Saber mas &rarr;
                </a>
                </div>
            </div>
    )
}