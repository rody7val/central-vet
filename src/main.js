import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import 'moment/locale/es'
import { firestore, auth, init } from './config/firebase.js'

Vue.prototype.moment = moment
Vue.config.productionTip = false

init(() => {
  firestore()
  auth().onAuthStateChanged((user) => {
    let isRedirect = router.query && router.query.redirect
    let redirect = isRedirect ? router.query.redirect : '/admin'
    store.commit('setAuth', {
      isAuthenticated: user !== null,
      user: user
    })
    router.push(redirect)
  }, (error) => { console.error(error) })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
