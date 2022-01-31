import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {ListaUsuarios} from '../data/ListaUsuarios';
class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      imagen: '',
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  logout() {
    this.setState({
      user: '',
      password: '',
      imagen:'',
    });
  }

  render() {
    if (this.state.user == '') {
      return <p>Sesion no inicia</p>;
    } else {
      return (
        <div className="main-site">
          <Container>
            <Form>
              {/* NOMBRE */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario: {this.state.user}</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Imagen: {this.state.imagen}</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contraseña: {this.state.password}</Form.Label>
              </Form.Group>

              <Button variant="primary" type="button" onClick={this.logout}>
                Logout
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}

export default Perfil;


