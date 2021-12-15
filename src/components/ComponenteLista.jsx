import React from 'react';

export default function ComponenteLista(props) {
  return <li class="check">{props.texto}
    <input type="checkbox" ></input>
  </li>;
}
