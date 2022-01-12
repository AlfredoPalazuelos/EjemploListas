import React from 'react';
import PaginaListas from './components/PaginaListas';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { Login } from './components/Login';
import Header from './components/header';
import {MenuItems} from './data/MenuItems';


function createMenuRutas(){

  const listRoutes=[];

  for(let i=0; i<MenuItems.length;i++){
    listRoutes.push(
      <Route key={MenuItems[i].id} path={MenuItems[i].paht} exact component={MenuItems[i].component}></Route>
    );
  }
  return listRoutes;
}


export default function App(){

  return (
  
    <Router>
      <Header/>
      {createMenuRutas()}
    </Router>
    
  );



}