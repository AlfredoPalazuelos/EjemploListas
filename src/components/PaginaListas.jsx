import React from "react";
import ListaClase from './ListaClase';
import Title from './header';


export default function PaginaListas(){
  const elementos1 = [
    {texto: 'Tender la ropa', prioridad:'alta'}, 
    {texto:'Comer'},
    {texto:'Limpiar', prioridad:'media'},
  ];
  const elementos2 = [

    {texto:'Tarea DI', prioridad:'alta'}

  ];
  const elementos3 = [
    {done: true, texto:'Comprar pintura', prioridad:'media'},
  ];
  return (
    <div>
      
      <ListaClase titulo = "Tareas de la casa" icono ="📦" elementos={elementos1}/>
      <ListaClase titulo = "Tareas de clase" icono ="📜" elementos={elementos2}/>
      <ListaClase titulo = "Pintar la casa" icono ="🛠" elementos={elementos3}/>
    </div>
    );
}