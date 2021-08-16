import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Layout from '../layouts/MainLayout.vue'
import Veterinaria from '../views/Veterinaria.vue'
import Clientes from '../views/Clientes.vue'
import Pacientes from '../views/Pacientes.vue'
import Login from '../views/Login.vue'
import Err from '../views/Err.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Veterinaria },
      { path: '/login', component: Login },
      { path: '/clientes', component: Clientes, meta: { requiresAuth: true } },
      { path: '/clientes/:id', component: Pacientes },
      //{ path: '/clientes/:id', component: Cliente, meta: { requiresAuth: true } },
    ],
  },
  {
    path: '*',
    component: Err
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  //linkActiveClass: "active",
  //linkExactActiveClass: "exact-active",
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {msj: 'Identifícate', redirect: to.fullPath},
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
