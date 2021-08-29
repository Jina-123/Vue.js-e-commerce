import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosproduits',
    name: 'Nosproduits',
    
    component: () => import('../views/Nosproduits.vue')
  },
  {
    path: '/recrutement',
    name: 'Recrutement',
    component: () => import ('../views/Recrutement.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import ('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
