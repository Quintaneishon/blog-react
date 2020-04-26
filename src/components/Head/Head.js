import React from 'react';

import './Head.scss';

export default function Head(props){
    const { carreras } = props;
    const ings = carreras.filter((carrera) => {
        return carrera.Id_Tipo == 0
    });
    const lics = carreras.filter((carrera) => {
        return carrera.Id_Tipo == 1
    });
    const saluds = carreras.filter((carrera) => {
        return carrera.Id_Tipo == 3
    });
    return(
        <div className='Head'>
           	<ul className="nav">
                <li><a className="namepage">EducationHub</a></li>
                <li><a>Ingenierías</a>
                    <ul id="submenu">
                        {ings.map((ing)=><li><a>{ing.Nombre}</a></li>)}
                    </ul>
                </li>
                <li><a>Licenciaturas</a>
                    <ul id="submenu">
                        {lics.map((lic)=><li><a>{lic.Nombre}</a></li>)}
                    </ul>
                </li>
                <li><a>Salud</a>
                    <ul id="submenu">
                        {saluds.map((salud)=><li><a>{salud.Nombre}</a></li>)}
                    </ul>
                </li>
            </ul>
        </div>

    )
}