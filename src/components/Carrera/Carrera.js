import React, { useState } from 'react';
import Head from '../Head';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {urlApiCarrera,idsCarreras} from '../../utils/constants';
import Loading from '../Loading';
import Empty from '../Empty';
import SideBar from '../SideBar';
import Herramientas from '../Herramientas';
import Cursos from '../Cursos';

import './Carrera.scss';
import '../Home/App.scss';

export default function Carrera(props){
    const { carreras: { result, loading, error }} = props;
    const { name } = useParams();
    const [activo,setActivo] = useState('Herramientas');

    const id = idsCarreras[name];
    const carrera = useFetch(urlApiCarrera+ (id === undefined ? '-1' : id),null);
    console.log(carrera);
    let data = [];

    return(
        <div className='App'>
            {loading || !result || !carrera.result|| carrera.loading ? (
          <Loading />
        ) : (
          <>
            <Head carreras={result[0]}/>
            {carrera.result[0].length == 0 ? (
              <Empty />
            ):(
              <div className='carrera'>
                <div className='carrera__header'>
                  <div className='carrera__header-picture'
                    style={{backgroundImage: `url(${carrera.result[0][0].imagen_carrera})`, opacity: "0.6"}}
                  >
                    &nbsp;
                  </div>
                  <h4 className='carrera__header-title'>
                  <span className="carrera__header-title--span">{carrera.result[0][0].nombre_carrera}</span>
                  </h4>
                </div>
                <div className='carrera__container'>
                  <SideBar activo={activo} setActivo={setActivo} />
                  <div className='carrera__content'>
                    {(activo === 'Herramientas') ? 
                      (<Herramientas data={carrera.result[1]} />):
                      (activo === 'Cursos') ?
                      (<Cursos data={carrera.result[3]} />):
                      <span>Nada Aun</span>
                    }
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        </div>
    )


}
    
    