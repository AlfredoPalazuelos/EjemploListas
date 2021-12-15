import React from 'react';

import './componente-lista.css';

export default function ComponenteLista(props) {

  let claseLista="";

  if(props.done){

    claseLista="checked";

  }else{
    claseLista="unchecked";
  }

  if(props.priorodad==='alta'){

    claseLista+='alta';

  }if(props.prioridad==='baja'){

    claseLista+='baja';

  }if(){
    
  }


  return <li className={claseLista}>{props.texto}
    <input type="checkbox" ></input>
  </li>;
}
