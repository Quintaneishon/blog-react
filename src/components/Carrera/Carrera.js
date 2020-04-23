import React, { useReducer } from 'react';
import Head from '../Head';
import { useParams } from "react-router-dom";
import './Carrera.scss';

export default function Carrera(props){
    const { carreras: { result, loading, error }} = props;
    const { name } = useParams();

    return(
        <div className='Carrera'>
            {loading || !result ? (
          'Cargando ...'
        ) : (
            <>
          <Head carreras={result[0]}/>
            <div className='titulo'>
                Lo siento esta carrera no la tenemos aun
            </div>
          </>
        )}
        </div>
    )


}
    
    