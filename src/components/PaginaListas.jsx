import React from 'react';

import Lista from './Lista';
import ListaClase from './ListaClase';

export function PaginaListas() {
  const elementos1 = [
    { done: false, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: true, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Tomates' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Leche' },
  ];
  const elementos3 = [{ done: false, texto: 'Estudiar DI' }];

  return (
    <div className="main-site">
      <h1>Listas de tareas</h1>
      <Lista
        titulo="Tareas casa "
        icono="♥"
        elementos={elementos1}
      />
      <ListaClase
        titulo="Tareas Clase "
        icono="🙌"
        elementos={elementos3}
      />
    </div>
  );
}
