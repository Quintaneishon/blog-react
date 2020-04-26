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
                <li><a>EducationHub</a></li>
                <li><a>Ingenierías</a>
                    <ul id="submenu">
                        <li>Materia 1</li>
                        <li>Materia 2</li>
                        <li>Materia 3</li>
                    </ul>
                </li>
                <li><a>Licenciaturas</a>
                    <ul id="submenu">
                        <li>Materia 1</li>
                        <li>Materia 2</li>
                        <li>Materia 3</li>
                    </ul>
                </li>
                <li><a>Salud</a>
                    <ul id="submenu">
                        <li>Materia 1</li>
                        <li>Materia 2</li>
                        <li>Materia 3</li>
                    </ul>
                </li>
            </ul>
        </div>

    )
}