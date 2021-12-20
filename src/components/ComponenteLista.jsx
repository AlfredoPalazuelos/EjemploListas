import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class lista extends React.Components{

  listaInicial = [];
  if (elementos = undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaInicial.push(
        <ComponenteListaClase
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
      );
    }
  }



}

export default Lista;
Lista.defaultProps = {
  prioridad: 'baja',
  done: false
};

export default ComponenteListaClase;