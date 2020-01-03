import Vue from 'vue'
import App from './App.vue'
import router from './krouter'
import store from './kstore'
// import Create from './utils/create'
// import create from './utils/create'
import Notice from './components/notice'

Vue.config.productionTip = false
// Vue.prototype.$create = create
Vue.use(Notice)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
