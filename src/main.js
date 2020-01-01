import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Create from './utils/create'

Vue.config.productionTip = false
// Vue.prototype.$create = create
Vue.use(Create)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
