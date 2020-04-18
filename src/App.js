import React from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import Body from './components/Body/Body';
import './App.scss';

function App() {
  return (
    <div className='App'>
    <Head />
    <Body />
    <Footer />
    </div>
  );
}

export default App;
