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
            <div>
                <a id="Logo">EducationHub</a>
            </div>
            <div>
                <a href="">Ingenierías</a>
                    <ol>
                    {ings.map((ing) => (
                        <li>{ing.Nombre}</li>
                    ))}
                    </ol>
            </div>
            <div>
                <a href="">Licenciaturas</a>
            </div>
            <div>
                <a href="">Salud</a>
                {saluds.map((salud) => (salud.Nombre))}
            </div>
        </div>

    )
}