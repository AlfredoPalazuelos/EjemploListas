import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Tabla } from '../components/Tabla';
import Perfil from '../components/Perfil';
import ApiOnline from '../components/ApiOnline';
import TablaVideojuegos from '../components/TablaVideojuegos';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/tabla',
    title: 'Tabla',
    component: Tabla,
  },
  {
    id: 4,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 5,
    path: '/TablaPelis',
    title: 'TablaPelis',
    component: ApiOnline,
  },
  {
    id: 6,
    path: '/TablaVideojuegos',
    title: 'TablaVideojuegos',
    component: TablaVideojuegos,
  },
];

/*
  path
  id
  title
  component
  

*/
