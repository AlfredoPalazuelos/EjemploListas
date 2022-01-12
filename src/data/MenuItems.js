import { Home } from '../components/Home';
import { Perfil } from '../components/Perfil';
import { Login } from '../components/Login';
import PaginaListas from '../components/PaginaListas';

export const MenuItems =[
  {
    paht: '/',
    id: 1,
    title: 'Home',
    component: Home
  },
  {    
    paht: '/listas',
    id: 2,
    title: 'Lista de tareas',
    component: PaginaListas
  },
  {    
    paht: '/perfil',
    id: 3,
    title: 'Perfil',
    component: Perfil
  },
  {    
    paht: '/Login',
    id: 4,
    title: 'Login',
    component: Login
  }

]