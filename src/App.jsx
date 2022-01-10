import React from 'react';
import PaginaListas from './components/PaginaListas';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';


export default function App(){

  return (
    <>
    <nav>
      <h1>Mi aplicacion</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/listas">Lista de Tareas</a></li>
        <li><a href="/perfil">Perfil</a></li>
      </ul>
    </nav>
    <Router>
      <Route path='/' component={Home}></Route>
      <Route path='/listas' component={PaginaListas}></Route>
      <Route path='/perfil' component={Perfil}></Route>
    </Router>
    </>
  );



}