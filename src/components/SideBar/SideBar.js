import React from 'react';

import './SideBar.scss';

export default function SideBar(){
    return(
        <div className='side-bar'>
            <div><a>Herramientas/Cursos</a></div>
            <div><a>Cursos</a></div>
            <div><a>Apuntes</a></div>
            <div><a>Temario General</a></div>
            <div><a>Foro</a></div>
            <div><a>Ranking México</a></div>
        </div>
    )
}