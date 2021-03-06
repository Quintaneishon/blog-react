import React, { useState,useEffect } from 'react';
import useFetch from "../../hooks/useFetch";
import {urlApiBusqueda} from '../../utils/constants';
import { Link } from "react-router-dom";
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

    const [text, setText] = useState('');
    const [busqueda, setBusqueda] = useState();
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(urlApiBusqueda+text);
                const json = await res.json();
                setBusqueda(json);
            } catch (err) {
                console.log(err);
            }
        })();
    },[text]);
    
    let listaIngenierias = [];
    ings.forEach(ing => {
        let nameArr = ing.Nombre.split(' ');
        let name = [];
        nameArr.forEach(n => {
            name.push(n.charAt(0).toUpperCase() + n.slice(1));
        });
        listaIngenierias.push(name.join(''));
    });

    let listaLicenciaturas = [];
    lics.forEach(lic => {
        let nameArr = lic.Nombre.split(' ');
        let name = [];
        nameArr.forEach(n => {
            name.push(n.charAt(0).toUpperCase() + n.slice(1));
        });
        listaLicenciaturas.push(name.join(''));
    });

    let listaSaluds = [];
    saluds.forEach(salud => {
        let nameArr = salud.Nombre.split(' ');
        let name = [];
        nameArr.forEach(n => {
            name.push(n.charAt(0).toUpperCase() + n.slice(1));
        });
        listaSaluds.push(name.join(''));
    });

    return(
        <div className="Head">
           	<ul className="nav">
                <li id="linelogo"><Link to='/'><img src="../Img/Logo.png" id="logo"></img></Link></li>
                <li><a>Ingenierías</a>
                    <ul id="submenu">
                        {ings.map((ing,index)=>(
                            <li key={index}>
                                <img className="icon" src={ing.Icono} alt={`${ing.Icono}`} width="50px"/>
                                <Link to={`/Carreras/${listaIngenierias[index]}`}>{ing.Nombre}</Link>
                            </li>))}
                    </ul>
                </li>
                <li><a>Licenciaturas</a>
                    <ul id="submenu">
                    {lics.map((lic,index)=>(
                            <li key={index}>
                                <img className="icon" src={lic.Icono} alt={`${lic.Icono}`} width="50px"/>
                                <Link to={`/Carreras/${listaLicenciaturas[index]}`}>{lic.Nombre}</Link>
                            </li>))}
                    </ul>
                </li>
                <li><a>Salud</a>
                    <ul id="submenu">
                    {saluds.map((salud,index)=>(
                            <li key={index}>
                                <img className="icon" src={salud.Icono} alt={`${salud.Icono}`} width="50px"/>
                                <Link to={`/Carreras/${listaSaluds[index]}`}>{salud.Nombre}</Link>
                            </li>))}
                    </ul>
                </li>
            </ul>
            <div className="search">
                <input className="searchbar" type="text" pattern="^[A-Z0-9a-z]+$" onChange={e => setText(e.target.value)} value={text}></input>
                <div className="searchres">
                    {
                        busqueda == null 
                            ? ("") 
                            : busqueda.lista.map
                        ((element,index)=>
                            (
                                <p key={index}> {element.imagen} {element.nombre}  </p>
                            )
                        )    
                    }
                </div>
            </div>
            <div className="searchicon" ><svg id="icon"><use xlinkHref="../Icons/sprite.svg#icon-magnifying-glass"></use></svg></div>
        </div>

    )
}