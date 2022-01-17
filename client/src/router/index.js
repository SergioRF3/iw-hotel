import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import InstalacionesComponent from '@/components/InstalacionesComponent.vue'
import HabitacionesComponent from '@/components/HabitacionesComponent.vue'
import SalasComponent from '@/components/SalasComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'

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
  // Ruta para login
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
