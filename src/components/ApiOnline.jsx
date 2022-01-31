import React from 'react';
import {Table, Card, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
class ApiOnline extends React.Component{

  constructor(props){
    super(props);
    this.state={img: '',titulo:'', director:'', año:'', puntuacion: '',tableData: [] }
  }


  cambiaruser(item){

    const titulo=item.title;
    const director=item.director;
    const año=item.release_date;
    const puntuacion=item.rt_score;
    this.setState({img:item.image ,titulo: titulo, director: director, año: año, puntuacion: puntuacion});

  }

  async componentDidMount(){

    const response= await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData= await response.json();
    this.setState({tableData: responseData});

  }

  render(){
    return (
<Container>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Titulo</th>
      <th>Director</th>
      <th>Año</th>
      <th>Puntuacion</th>
    </tr>
  </thead>
  <tbody>
      {this.state.tableData.map((item) => {
        return(
        <tr onClick={() => this.cambiaruser(item)}>
          <td>{item.title}</td>
          <td>{item.director}</td>
          <td>{item.release_date}</td>
          <td>{item.rt_score}</td>
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
      Pelicula del director {this.state.director} y del año  {this.state.año}
    </Card.Text>
  </Card.Body>
</Card>
</Container>



    );


  }

}

export default ApiOnline;