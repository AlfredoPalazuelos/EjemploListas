import React from 'react';
import {Table, Card, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {ListaTabla, TitulosTabla}  from '../data/ListaTabla';
class BootstrapTabla extends React.Component{

  constructor(props){
    super(props);
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
        <tr>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.usuario}</td>
         </tr>
        )
      })}
  </tbody>
</Table>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{ListaTabla[1].usuario}</Card.Title>
    <Card.Text>
      Usuario con nombre {ListaTabla[1].nombre}
    </Card.Text>
  </Card.Body>
</Card>
</Container>



    );


  }

}

export default BootstrapTabla;