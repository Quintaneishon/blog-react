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
                <li id="linelogo"><img src="./Img/Logo.png" id="logo"></img></li>
                <li id="linename"><a className="namepage">EducationHub</a></li>
                <li><a>Ingenierías</a>
                    <ul id="submenu">
                        {ings.map((ing,index)=><li key={index}><img className="icon" src={`../../icons/${ing.Icono}`} alt={`${ing.Icono}`} width="80px" height="80px"/><a>{ing.Nombre}</a></li>)}
                    </ul>
                </li>
                <li><a>Licenciaturas</a>
                    <ul id="submenu">
                        {lics.map((lic,index)=><li key={index}><img className="icon" src={`../../icons/${lic.Icono}`} alt={`${lic.Icono}`} width="80px" height="80px"/><a>{lic.Nombre}</a></li>)}
                    </ul>
                </li>
                <li><a>Salud</a>
                    <ul id="submenu">
                        {saluds.map((salud,index)=><li key={index}><img className="icon" src={`../../icons/${salud.Icono}`} alt={`${salud.Icono}`} width="80px" height="80px"/><a>{salud.Nombre}</a></li>)}
                    </ul>
                </li>
            </ul>
        </div>

    )
}