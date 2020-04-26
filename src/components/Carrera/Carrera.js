import React, { useReducer } from 'react';
import Head from '../Head';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {urlApiCarrera} from '../../utils/constants';
import Loading from '../Loading';

import './Carrera.scss';

export default function Carrera(props){
    const { carreras: { result, loading, error }} = props;
    const { name } = useParams();
    let id;
    if(name.trim() == 'SistemasComputacionales'){
      id = 0;
    }else{
      id = -1;
    }
    const carrera = useFetch(urlApiCarrera+id,null);
    
    return(
        <div className='Carrera'>
            {loading || !result || !carrera.result|| carrera.loading ? (
          <Loading />
        ) : (
          <>
            <Head carreras={result[0]}/>
            {carrera.result[0].length == 0 ? (
              <div className='titulo'>
                <h1>no hay</h1>
              </div>
            ):(
              <div className='titulo'>
                <h1>{carrera.result[0][0].nombre_carrera}</h1>
              </div>
            )}
          </>
        )}
        </div>
    )


}
    
    