// src/Title.js

import React from 'react'
import './title.css'
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';

function Title() {
  return (
    <div className='Title'>
      <h1>Lista de Tareas ♠</h1>
      <HeaderRNE>
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        </HeaderRNE>
    </div>
  )
}

export default Title