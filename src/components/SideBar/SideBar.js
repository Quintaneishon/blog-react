import React from 'react';
import {STORAGE_BAR_ACTIVE} from '../../utils/constants';
import './SideBar.scss';

export default function SideBar(props){
    const {activo,setActivo} = props;

    return(
        <div className='side-bar'>
            <h2 id="title">Menú</h2>
            <div id="Herramientas" className={'anim' + ('Herramientas'===activo ? ' anim-activo' : '')} onClick={() => {setActivo('Herramientas');localStorage.setItem(STORAGE_BAR_ACTIVE,'Herramientas')}}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-tools"></use></svg><a>Herramientas</a></div></div>
            <div id="Cursos" className={'anim' + ('Cursos'===activo ? ' anim-activo' : '')} onClick={() => {setActivo('Cursos');localStorage.setItem(STORAGE_BAR_ACTIVE,'Cursos')}}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-book"></use></svg><a>Cursos</a></div></div>
            <div id="Apuntes" className={'anim' + ('Apuntes'===activo ? ' anim-activo' : '')} onClick={() => {setActivo('Apuntes');localStorage.setItem(STORAGE_BAR_ACTIVE,'Apuntes')}}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-pencil"></use></svg><a>Apuntes</a></div></div>
            <div id="Foro" className={'anim' + ('Foro'===activo ? ' anim-activo' : '')} onClick={() => {setActivo('Foro');localStorage.setItem(STORAGE_BAR_ACTIVE,'Foro')}}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-quote"></use></svg><a>Foro</a></div></div>
            <div id="Ranking" className={'anim' + ('Ranking'===activo ? ' anim-activo' : '')} onClick={() => {setActivo('Ranking');localStorage.setItem(STORAGE_BAR_ACTIVE,'Ranking')}}><div><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-stats-bars"></use></svg><a>Ranking México</a></div></div>
        </div>
    )
}