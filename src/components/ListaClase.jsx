import React, {useState, useRef} from "react";
import ComponenteListaClase from './ComponenteListaClase';
class ListaClase extends React.Component{
  constructor(props) {
    super(props);
    this.titulo=props.titulo;
    this.icono=props.icono
    this.elementos=props.elementos
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
  const [listaComponentes, setListaComponentes] = useState(listaInicial);
  const valorTextInput= useRef('');
  const valorPrioridad= useRef('');

  const newLista = listaComponentes.concat(
    <ComponenteListaClase texto ={valorTextInput.current.value} prioridad={valorPrioridad.current.value} />
  );
  setListaComponentes(newLista);
}
  render(){

    return (
      <div>
      {this.titulo} - {this.icono}
        <ul>
          {listaComponentes}
          <li>
            <input ref={valorTextInput} type="Texto" placeholder="Introduce texto"/>
            <br/>
            <select ref={valorPrioridad} name="prioridad">
            <option value="alta">Alta</option> 
            <option value="media">Media</option> 
            <option value="baja">Baja</option> 
            </select>
          <button onClick={setElement()}>Añadir</button>
          </li>
        </ul>
      </div>);
  }
}
export default ListaClase;