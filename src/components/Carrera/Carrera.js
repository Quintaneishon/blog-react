import React, { useReducer } from 'react';
import Head from '../Head';
import { useParams } from "react-router-dom";
import './Carrera.scss';

export default function Carrera(){
    const { name } = useParams();

    return(
        <div className='Carrera'>
            <Head />
            <div className='titulo'>
                Lo siento esta carrera no la tenemos aun
            </div>
        </div>
    )
}

   
    
    