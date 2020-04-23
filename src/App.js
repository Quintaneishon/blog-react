import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrera from './components/Carrera';
import useFetch from "./hooks/useFetch";
import {urlApiCarreras} from './utils/constants';

function App() {
  const carreras = useFetch(urlApiCarreras, null);
  console.log(carreras);
  return (
    <main>
    <Switch>
      <Route path="/" component={() => <Home carreras={carreras} />} exact />
      <Route path="/Carreras/:name" component={() => <Carrera carreras={carreras} />} exact />
    </Switch>
    </main>
  );
}

export default App;
