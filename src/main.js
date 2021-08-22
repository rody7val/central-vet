import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import 'moment/locale/es'
import { firestore, auth, init } from './config/firebase.js'
//import { getBreadcrumbs } from './utils'

Vue.prototype.moment = moment
Vue.config.productionTip = false

init(() => {
  firestore()
  auth().onAuthStateChanged((user) => {
    const orderBy = ['created_at']
    let isRedirect = (
      router.history.current.query && router.history.current.query.redirect
    )
    let redirect = isRedirect ? router.history.current.query.redirect : "/"

    store.commit('setAuth', {
      isAuthenticated: user !== null,
      user: user
    })

    if (user !== null) {// open sync
      store.dispatch('clientes/openDBChannel', {clauses: {orderBy}})
      store.dispatch('pacientes/openDBChannel', {clauses: {orderBy}})
      //store.dispatch('entradas/openDBChannel', {clauses: {orderBy}})
    } else {// close sync
      store.dispatch('clientes/closeDBChannel', { clearModule: true })
      store.dispatch('pacientes/closeDBChannel', { clearModule: true })
      //store.dispatch('entradas/closeDBChannel', { clearModule: true })
    }

    // auth redirect
    return redirect === router.history.current.path ? false : router.push(redirect)
  }, (error) => { console.error(error) })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
