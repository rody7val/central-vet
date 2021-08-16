import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import 'moment/locale/es'
import { firestore, auth, init } from './config/firebase.js'
import { getBreadcrumbs } from './utils'

Vue.prototype.moment = moment
Vue.config.productionTip = false

init(() => {
  firestore()
  auth().onAuthStateChanged((user) => {
    let isRedirect = (
      router.history.current.query && router.history.current.query.redirect
    )
    let breadcrumbs = getBreadcrumbs(router.history.current.path)
    let redirect = isRedirect ? router.history.current.query.redirect : "/"

    // auth store change
    store.commit('setBreadcrumbs', breadcrumbs)
    store.commit('setAuth', {
      isAuthenticated: user !== null,
      user: user
    })

    // auth redirect
    redirect === router.history.current.path ? false : router.push(redirect)
  }, (error) => { console.error(error) })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
