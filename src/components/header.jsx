// src/Title.js

import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {MenuItems} from '../data/MenuItems';
import './header.css';


class Header extends React.Component{
constructor(props){
super(props);
this.state={cliked: false};
}

createMenuLink(){

  const listComponents=[];
  for(let i=0; i< MenuItems.length;i++){

    listComponents.push(
      <li  key={MenuItems[i].id}><Link className="navbar-link" to ={MenuItems[i].path}>{MenuItems[i].title}</Link></li>
      
    )

  }

  return listComponents;


}

changeClick(){

  this.setState({cliked:!this.state.cliked});

}


render(){
return(
  <nav className="header-navbar">
    <div className="navbar-logo">
      <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBEOcjPPVl-dKhMQLag_OaUnSQP-5JbOPiQ&usqp=CAU"></img>
      <i class="fas fa-futbol"></i>
    </div>
  <ul className="navbar-menu ">
    {this.createMenuLink()}
  </ul>
  <div className="menu-icon" onClick={ this.changeClick.bind(this)} >
  <i  className={this.state.cliked ? "fas fa-times" : "fas fa-bars"} />
  </div>
</nav>



)

}

}

export default Header;