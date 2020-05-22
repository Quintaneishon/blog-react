import React from 'react';

import './SideBar.scss';

export default function SideBar(){
    return(
        <div className='side-bar'>
            <h2 id="title">Menú</h2>
            <div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-tools"></use></svg><a>Herramientas/Cursos</a></div>
            <div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-book"></use></svg><a>Cursos</a></div>
            <div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-pencil"></use></svg><a>Apuntes</a></div>
            <div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-browser"></use></svg><a>Temario General</a></div>
            <div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-quote"></use></svg><a>Foro</a></div>
            <div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-stats-bars"></use></svg><a>Ranking México</a></div>
        </div>
    )
}