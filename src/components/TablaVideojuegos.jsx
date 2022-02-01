import React from 'react';
import {Table, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
class TablaVideojuegos extends React.Component{

  constructor(props){
    super(props);
    this.state={titulo:'', genero:'', plataforma:'', desarrollador: '',tableData: [] }
  }


  cambiaruser(item){

    const titulo=item.title;
    const genero=item.genre;
    const plataforma=item.platform;
    const desarrollador=item.developer;
    this.setState({titulo: titulo, genero: genero, plataforma: plataforma, desarrollador: desarrollador});

  }

  async componentDidMount(){

    const response= await fetch('https://www.freetogame.com/api/games',{ mode: 'no-cors'});
    const responseData= await response.end();
    this.setState({tableData: responseData});

  }

  render(){
    return (
<Container>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Titulo</th>
      <th>Genero</th>
      <th>Plataforma</th>
      <th>Dessarrollador</th>
    </tr>
  </thead>
  <tbody>
      {this.state.tableData.map((item) => {
        return(
        <tr onClick={() => this.cambiaruser(item)}>
          <td>{item.title}</td>
          <td>{item.genre}</td>
          <td>{item.platform}</td>
          <td>{item.developer}</td>
         </tr>
        )
      })}
  </tbody>
</Table>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.img} />
  <Card.Body>
    <Card.Title>{this.state.titulo}</Card.Title>
    <Card.Text>
      Videojuego desarrollado por {this.state.developer} para la plataforma  {this.state.plataforma}
    </Card.Text>
  </Card.Body>
</Card>
</Container>



    );


  }

}

export default TablaVideojuegos;