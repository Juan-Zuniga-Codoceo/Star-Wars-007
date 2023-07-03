import Vue from 'vue'
import VueRouter from 'vue-router'
//import Inicio from '@/views/Inicio.vue'
//import Personajes from '@/views/Personajes.vue'
import Personaje from '@/views/Personaje.vue'
import Contacto from '@/views/Contacto.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '@/views/Inicio.vue')
  },
  {
    path: '/personajes',
    component: () => import(/* webpackChunkName: "personajes" */ '@/views/Personajes.vue'),
    alias: ['/people','/characters']
  },
  {
    path: '/personajes/:id',
    component: Personaje,
    props:true,
  },
  {
    path: '/contacto/',
    component: Contacto
  },
  {
    path: '*',
    component: NotFound
  },
  //{
   // path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
