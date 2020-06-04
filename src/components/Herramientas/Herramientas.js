import React from 'react';
import List from '../List';

import './Herramientas.scss';

export default function Herramientas(props){
    const {data} = props;
    return(
        <div className='herramientas'>
            {data.map(dato => <Herramienta key={dato.id} herr={dato} />)}
        </div>
    )
}

function Herramienta(props){
    const { herr:{
        nombre,
        link,
        icono,
        descripcion,
        pros,
        contras,
        costo}} = props;
    
    return(
        <div className='herramienta'>
            <div className='herramienta__head'>
                <img alt={"Imagen "+ nombre} src={icono}/>
            </div>
            <div className='herramienta__body'>
                <div className='herramienta__detalles'>
                    <div className='herramienta__detalles-nombre'>
                        {nombre}
                    </div>
                    <div className='herramienta__detalles-costo'>
                        {costo ? (`De pago`)  : ('Gratis')}
                    </div>
                </div> 
                <div className='herramienta__descripcion'>
                    {descripcion}
                </div>
                <div className='herramienta__opiniones'>
                    <div className='herramienta__opiniones__container herramienta__opiniones__container-pros'>
                        <div className='herramienta__opiniones-title'>Pros</div>
                        <div className='herramienta__opiniones__pros'>
                            <List arr={pros.split('-')} />
                        </div>
                    </div>
                    <div className='herramienta__opiniones__container'>
                        <div className='herramienta__opiniones-title'>Contras</div>
                        <div className='herramienta__opiniones__contras'>
                            <List arr={contras.split('-')} />
                        </div>
                    </div>
                </div>
                <div className='herramienta__footer'>
                    <a className='btn-inline' href={link} target='__blank'>
                        Saber mas &rarr;
                    </a>
                </div>
            </div>
        </div>

    )
}