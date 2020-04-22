import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrera from './components/Carrera';

function App() {
  return (
    <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Carreras/:name" component={Carrera} exact />
    </Switch>
    </main>
  );
}

export default App;
