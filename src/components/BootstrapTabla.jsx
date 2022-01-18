import React from 'react';
import {Table} from 'react-bootstrap';
import {ListaTabla, TitulosTabla}  from '../data/ListaTabla';
class BootstrapTabla extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
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



    );


  }

}

export default BootstrapTabla;