import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {ListaUsuarios} from '../data/ListaUsuarios';


class Home extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = { user: '', pass: '' };
    this.login = this.login.bind(this);
    this.valorusuario=React.createRef();
    this.valorpass = React.createRef();

  }

  login() {
    this.setState({ user: this.valorusuario.current.value, pass: this.valorpass.current.value });
  }

  componentDidMount(){
    this.setState({user:localStorage.getItem('user'),pass:localStorage.getItem('password')});
  }

  render() {
    for (let i=0; i<ListaUsuarios.length; i++){

    if (
      this.state.user === ListaUsuarios[i].usuario 
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido {this.state.user}</h1>
        </div>
      );
    } else {
      return (
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de usuario : </Form.Label>
              <Form.Control ref={this.valorusuario} type="email" placeholder="Usuario o email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña: </Form.Label>
              <Form.Control ref={this.valorpass} type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.login}>
              Login
            </Button>
          </Form>
        </Container>
      );
    }
  }
  }

  componentWillUnmount(){

    localStorage.setItem('user',this.state.user);
    localStorage.setItem('password',this.state.pass);

  }

}

export default Home;
