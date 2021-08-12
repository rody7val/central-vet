//import { EmojiPickerPlugin } from 'vue-emoji-picker'
import moment from 'moment'
import 'moment/locale/es'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.moment = moment
//Vue.use(EmojiPickerPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
