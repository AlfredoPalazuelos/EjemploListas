import React from "react";
import "./style.css";
import ListaClase from './components/Lista';


export default function App(){
  const elementos1 = [
    {texto: 'Descomer', prioridad:'alta'}, 
    {texto:'Comer'},
  ];
  const elementos2 = [

  ];
  const elementos3 = [
    {done: true, texto:'Comprar pintura', prioridad:'media'},
  ];
  return (
    <div>
      <h1>Lista de Tareas </h1>;
      <ListaClase titulo = "Tareas de casa" icono ="♕" elementos={elementos1}/>;
      <ListaClase titulo = "Tareas de clase" icono ="♚" elementos={elementos2}/>;
      <ListaClase titulo = "Pintar la casa" icono ="⚝ " elementos={elementos3}/>;
    </div>
    );
}