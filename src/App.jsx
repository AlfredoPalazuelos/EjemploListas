import React from 'react';

import { Lista } from './components/Lista';

export function App() {
  const elementos1 = ['Elemento (Comp) 1', 'Elemento (Comp) 2'];
  const elementos2=['Elemento (Comp) 1', 'Elemento (Comp) 2', 'Elemento (Comp) 3'];
  const elementos3=['Elemento (Comp) 1'];



  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <Lista titulo="Componente 1" icono=":(" elementos={elementos1} />
      <Lista titulo="Componente 2" icono=":*" elementos={elementos2}/>
      <Lista titulo="Componente 3" icono=";)" elementos={elementos3}/>
    </div>
  );
}
