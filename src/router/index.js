import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/cafes',
    name: 'cafes',
    component: () => import('../views/Cafes.vue')
  },
  {
    path: '/cafes/:id',
    name: 'cafe',
    component: () => import( '../views/Cafe.vue')
  },
  {
    path: 'cafes/new',
    name: 'newCafe',
    component: () => import( '../views/NewCafe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
