import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Layout from '../layouts/MainLayout.vue'
import Veterinaria from '../views/Veterinaria.vue'
import Admin from '../views/Admin.vue'
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
      { path: '/admin', component: Admin, meta: { requiresAuth: true } },
    ],
  },
  {
    path: '*',
    component: Err
  }
]

const router = new VueRouter({
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
