import React from 'react';

export default function ComponenteLista(props) {

  let claseLista="";

  if(props.done){

    claseLista="checked";

  }else{
    claseLista="unchecked";
  }


  return <li className={claseLista}>{props.texto}
    <input type="checkbox" ></input>
  </li>;
}
