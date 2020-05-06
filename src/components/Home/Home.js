import React from 'react';

import Head from '../Head';
import Body from '../Body/Body.js';
import Loading from '../Loading';
import './App.scss';

export default function Home(props){
    const { carreras: { result, loading, error }} = props;
    return(
      <div className='App'>
        {loading || !result ? (
          <Loading />
        ) : (
            <>
          <Head carreras={result[0]} />
          <Body />
          </>
        )}
    
    </div>)
}