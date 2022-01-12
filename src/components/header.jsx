// src/Title.js

import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {MenuItems} from '../data/MenuItems';
import './barranav.css'


class Header extends React.Component{
constructor(props){
super(props);
}

createMenuLink(){

  const listComponents=[];
  for(let i=0; i< MenuItems.length;i++){

    listComponents.push(
      <li className="item" key={MenuItems[i].id}><Link className="link" to ={MenuItems[i].paht}>{MenuItems[i].title}</Link></li>
      
    )

  }

  return listComponents;


}

createMenuRutas(){

  const listRoutes=[];

  for(let i=0; i<MenuItems.length;i++){
    listRoutes.push(
      <Route path={MenuItems[i].paht} exact component={MenuItems[i].component}></Route>

    )
  }
  return listRoutes;
}


render(){
return(
  <nav className="barra">
  <h1>Mi aplicacion</h1>
  <ul className="links">
    {this.createMenuLink()}
  </ul>
</nav>



)

}

}

export default Header;