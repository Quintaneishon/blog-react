import React from 'react';
import List from '../List';

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
            <div className='herramienta__head' style={{    
                backgroundImage: `url(${Icono})`,
                backgroundSize: 'cover'
            }}>
            </div>
            <div className='herramienta__body'>
                <div className='herramienta__detalles'>
                    <div className='herramienta__detalles-nombre'>
                        {Nombre}
                    </div>
                    <div className='herramienta__detalles-costo'>
                        {'$1000'}
                    </div>
                </div> 
                <div className='herramienta__descripcion'>
                    {Descripcion}
                </div>
                <div className='herramienta__opiniones'>
                    <div className='herramienta__opiniones__container herramienta__opiniones__container-pros'>
                        <div className='herramienta__opiniones-title'>Pros</div>
                        <div className='herramienta__opiniones__pros'>
                            <List arr={Pros.split('-')} />
                        </div>
                    </div>
                    <div className='herramienta__opiniones__container'>
                        <div className='herramienta__opiniones-title'>Contras</div>
                        <div className='herramienta__opiniones__contras'>
                            <List arr={Contras.split('-')} />
                        </div>
                    </div>
                </div>
                <div className='herramienta__footer'>
                    <a className='btn-inline' href={Link} target='__blank'>
                        Saber mas &rarr;
                    </a>
                </div>
            </div>
        </div>

    )
}