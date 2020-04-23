import React from 'react';
import Head from '../Head';
import { useParams } from "react-router-dom";
import './Carrera.scss';

export default function Carrera(){
    let { name } = useParams();
        

    return(
        <div className='Carrera'>
            <Head />
            <div className='titulo'>
                SOy la carrera {name}
            </div>
        </div>
    )
}

