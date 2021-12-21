import React, {useState, useRef} from "react";
import ComponenteListaClase from './ComponenteListaClase';
class ListaClase extends React.Component{
  constructor(props) {
    super(props);
    this.titulo=props.titulo;
    this.icono=props.icono
    this.elementos=props.elementos
    this.state={
      listaInicial: [listaComponentes, setListaComponentes]
     }
    this.valorTextInput = React.createRef();
    this.valorPrioridad = React.createRef();
  }
  setElementos(){
    const listaInicial = [];
  if (this.elementos !== undefined) {
    for (let i = 0; i < this.elementos.length; i++) {
      listaInicial.push(<ComponenteListaClase 
        done={this.elementos[i].done}
        texto={this.elementos[i].texto}
        prioridad={this.elementos[i].prioridad} 
      />);
    }
  }
}
  addElemt(){
   
    this.setState({listaInicial: [this.state.listaComponentes, ,this.state.setListaComponentes]})
    this.valorTextInput.current.focus();
    this.valorPrioridad.current.focus();
    
  
    const newLista = this.state.listaComponentes.concat(
      <ComponenteListaClase texto ={valorTextInput.current.value} prioridad={valorPrioridad.current.value} />
    );
    setListaComponentes(newLista);
  }
  

  render(){

    return (
      <div>
      {this.titulo} - {this.icono}
        <ul>
          {this.listaComponentes}
          <li>
            <input ref={this.valorTextInput} type="Texto" placeholder="Introduce texto"/>
            <br/>
            <select ref={this.valorPrioridad} name="prioridad">
            <option value="alta">Alta</option> 
            <option value="media">Media</option> 
            <option value="baja">Baja</option> 
            </select>
          <button onClick={this.addElemt()}>Añadir</button>
          </li>
        </ul>
      </div>);
  }
}
export default ListaClase;