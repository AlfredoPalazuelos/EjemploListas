// src/Title.js

import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './barranav.css'

class Header extends React.Component{
constructor(props){
super(props);
}




render(){
return(
  <nav className="barra">
  <h1>Mi aplicacion</h1>
  <ul className="links">
    <li className="item"><Link className="link" to ="/">Home</Link></li>
    <li className="item"><Link className="link" to ="/listas">Lista de tareas</Link></li>
    <li className="item"><Link className="link" to ="/perfil">Perfil</Link></li>
    <li className="item"><Link className="link" to ="/login">Login</Link></li>
  </ul>
</nav>


)

}

}

export default Header;