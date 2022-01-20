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
import FormReservarHabitacionesComponent from '@/components/FormReservarHabitacionesComponent.vue'
import FormReservarSalasComponent from '@/components/FormReservarSalasComponent.vue'
import FormReservasComponent from '@/components/FormReservasComponent.vue'
import FormServiciosComponent from '@/components/FormServiciosComponent.vue'
import FormTemporadasComponent from '@/components/FormTemporadasComponent.vue'
import FormPagoComponent from '@/components/FormPagoComponent.vue'
import PerfilComponent from '@/components/PerfilComponent.vue'

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
    path: '/reservaHab/:id',
    name: 'ReservaHab',
    component: FormReservarHabitacionesComponent
  },
  {
    path: '/reservaSala/:id',
    name: 'ReservaSala',
    component: FormReservarSalasComponent
  },
  {
    path: '/pago',
    name: 'Pago',
    component: FormPagoComponent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Ruta para login y registro y perfil
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
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilComponent
  },
  // Rutas para admin
  {
    path: '/admin/instalaciones',
    name: 'InstalacionesAdmin',
    component: FormInstalacionesComponent
  },
  {
    path: '/admin/habitaciones',
    name: 'HabitacionesAdmin',
    component: FormHabitacionesComponent
  },
  {
    path: '/admin/salas',
    name: 'SalasAdmin',
    component: FormSalasComponent
  },
  {
    path: '/admin/usuarios',
    name: 'UsuariosAdmin',
    component: FormUsuariosComponent
  },
  {
    path: '/admin/reservas',
    name: 'ReservasAdmin',
    component: FormReservasComponent
  },
  {
    path: '/admin/servicios',
    name: 'ServiciosAdmin',
    component: FormServiciosComponent
  },
  {
    path: '/admin/temporadas',
    name: 'TemporadasAdmin',
    component: FormTemporadasComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path.includes("/admin/")){
    if(localStorage.getItem('type') != 2){
      next({name: 'Login'})
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})

export default router
