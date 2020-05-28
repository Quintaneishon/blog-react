import React from 'react';

import './SideBar.scss';

export default function SideBar(props){
    const {activo,setActivo} = props;

    return(
        <div className='side-bar'>
            <h2 id="title">Menú</h2>
            <div id="Herramientas" className={'anim' + ('Herramientas'===activo ? ' anim-activo' : '')} onClick={() => setActivo('Herramientas')}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-tools"></use></svg><a>Herramientas</a></div></div>
            <div id="Cursos" className={'anim' + ('Cursos'===activo ? ' anim-activo' : '')} onClick={() => setActivo('Cursos')}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-book"></use></svg><a>Cursos</a></div></div>
            <div id="Apuntes" className={'anim' + ('Apuntes'===activo ? ' anim-activo' : '')} onClick={() => setActivo('Apuntes')}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-pencil"></use></svg><a>Apuntes</a></div></div>
            <div id="Foro" className={'anim' + ('Foro'===activo ? ' anim-activo' : '')} onClick={() => setActivo('Foro')}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-quote"></use></svg><a>Foro</a></div></div>
            <div id="Ranking" className={'anim' + ('Ranking'===activo ? ' anim-activo' : '')} onClick={() => setActivo('Ranking')}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-stats-bars"></use></svg><a>Ranking México</a></div></div>
        </div>
    )
}