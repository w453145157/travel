import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'styles/normalize.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'

fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')