import React from 'react';
import {Table, Card, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {ListaTabla, TitulosTabla}  from '../data/ListaTabla';
class BootstrapTabla extends React.Component{

  constructor(props){
    super(props);
    this.state={nombre:'', usario:'', apellido:'', img: ''}
  }


  cambiaruser(item){

    const nombre=item.nombre;
    const usuario=item.usuario;
    const apellido=item.apellido;
    const img=item.img;
    this.setState({nombre: nombre, usuario: usuario, apellido: apellido, img: img});

  }

  render(){
    return (
<Container>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>{TitulosTabla.filed1}</th>
      <th>{TitulosTabla.field2}</th>
      <th>{TitulosTabla.field3}</th>
    </tr>
  </thead>
  <tbody>
      {ListaTabla.map((item) => {
        return(
        <tr onClick={() => this.cambiaruser(item)}>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.usuario}</td>
         </tr>
        )
      })}
  </tbody>
</Table>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.img} />
  <Card.Body>
    <Card.Title>{this.state.usuario}</Card.Title>
    <Card.Text>
      Usuario con nombre {this.state.nombre} y apellido {this.state.apellido}
    </Card.Text>
  </Card.Body>
</Card>
</Container>



    );


  }

}

export default BootstrapTabla;