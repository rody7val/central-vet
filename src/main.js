//import { EmojiPickerPlugin } from 'vue-emoji-picker'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//Vue.use(EmojiPickerPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
