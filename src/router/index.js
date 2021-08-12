import Vue from 'vue'
import VueRouter from 'vue-router'
import Veterinaria from '../views/Veterinaria.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Veterinaria',
    component: Veterinaria
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  routes
})

export default router
