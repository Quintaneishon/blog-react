import React, { useReducer } from 'react';
import Head from '../Head';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {urlApiCarrera,idsCarreras} from '../../utils/constants';
import Loading from '../Loading';
import Empty from '../Empty';
import Footer from '../Footer';

import './Carrera.scss';

export default function Carrera(props){
    const { carreras: { result, loading, error }} = props;
    const { name } = useParams();

    const id = idsCarreras[name];
    const carrera = useFetch(urlApiCarrera+ (id === undefined ? '-1' : id),null);
    
    return(
        <>
            {loading || !result || !carrera.result|| carrera.loading ? (
          <Loading />
        ) : (
          <>
            <Head carreras={result[0]}/>
            {carrera.result[0].length == 0 ? (
              <Empty />
            ):(
              <div className='carrera'>
                <h1>{carrera.result[0][0].nombre_carrera}</h1>
              </div>
            )}
          </>
        )}
        </>
    )


}
    
    