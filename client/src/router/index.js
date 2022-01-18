import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import InstalacionesComponent from '@/components/InstalacionesComponent.vue'
import HabitacionesComponent from '@/components/HabitacionesComponent.vue'
import SalasComponent from '@/components/SalasComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import RegistroComponent from '@/components/RegistroComponent.vue'
import FormInstalacionesComponent from '@/components/FormInstalacionesComponent.vue'
import FormHabitacionesComponent from '@/components/FormHabitacionesComponent.vue'
import FormSalasComponent from '@/components/FormSalasComponent.vue'
import FormUsuariosComponent from '@/components/FormUsuariosComponent.vue'
import FormReservasComponent from '@/components/FormReservasComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/instalaciones',
    name: 'Instalaciones',
    component: InstalacionesComponent
  },
  {
    path: '/habitaciones',
    name: 'Habitaciones',
    component: HabitacionesComponent
  },
  {
    path: '/salas',
    name: 'Salas',
    component: SalasComponent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Ruta para login y registro
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegistroComponent
  },
  // Rutas para admin
  {
    path: '/admin/instalaciones',
    name: 'InstalacionesAdmim',
    component: FormInstalacionesComponent
  },
  {
    path: '/admin/habitaciones',
    name: 'HabitacionesAdmim',
    component: FormHabitacionesComponent
  },
  {
    path: '/admin/salas',
    name: 'SalasAdmim',
    component: FormSalasComponent
  },
  {
    path: '/admin/usuarios',
    name: 'UsuariosAdmim',
    component: FormUsuariosComponent
  },
  {
    path: '/admin/reservas',
    name: 'ReservasAdmim',
    component: FormReservasComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
