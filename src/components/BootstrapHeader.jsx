import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {MenuItems}  from '../data/MenuItems';
import { Link } from 'react-router-dom';
class BootstrapHeader extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="ligth">
      <Container>
      <Navbar.Brand href="#home">      
      <img
            className="logo-image"
            src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
          />
          <i className="fas fa-user-graduate" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav >
         {MenuItems.map((item) => {
           return <Nav.Link as={Link} to={item.path} >{item.title}</Nav.Link>
         })}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>



    );


  }

}

export default BootstrapHeader;