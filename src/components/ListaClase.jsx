import React, {useState, useRef} from "react";
import ComponenteListaClase from './ComponenteListaClase';
class ListaClase extends React.Component{
  constructor(props) {
    super(props);
    this.titulo= props.titulo;
    this.icono=props.icono;
    this.elementos=props.elementos;
    this.listaInicial=[];
    this.state={
      listaComponentes: this.listaInicial,
    }
    this.valorTextInput= React.createRef();
    this.valorPrioridad= React.createRef();
    
  }
  setElementos(){
  if (this.elementos !== undefined) {
    for (let i = 0; i < this.elementos.length; i++) {
        this.listaInicial.push(<ComponenteListaClase 
        done={this.elementos[i].done}
        texto={this.elementos[i].texto}
        prioridad={this.elementos[i].prioridad} 
      />);
    }
  }
}
addElemento(){

  const newLista = this.state.listaComponentes.concat(
    <ComponenteListaClase 
    texto ={this.valorTextInput.current.value} 
    prioridad={this.valorPrioridad.current.value} />
  );
  this.setState ({listaComponentes: newLista});
}
  render(){
    this.setElementos();
    return (
      <div>
      {this.titulo} - {this.icono}
        <ul>
          {this.state.listaComponentes}
          <li>
            <input ref={this.valorTextInput} type="Texto" placeholder="Introduce texto"/>
            <br/>
            <select ref={this.valorPrioridad} name="prioridad">
            <option value="alta">Alta</option> 
            <option value="media">Media</option> 
            <option value="baja">Baja</option> 
            </select>
          <button onClick={this.addElemento.bind(this)}>Añadir</button>
          </li>
        </ul>
      </div>);
  }
}
export default ListaClase;