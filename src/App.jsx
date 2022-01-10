import React from 'react';
import PaginaListas from './components/PaginaListas';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { Login } from './components/Login';
import Header from './components/header'



export default function App(){

  return (
  
    <Router>
      <Header></Header>
      <Route path='/' exact component={Home}></Route>
      <Route path='/listas' component={PaginaListas}></Route>
      <Route path='/perfil' component={Perfil}></Route>
      <Route path='/login' component={Login}></Route>
    </Router>
    
  );



}