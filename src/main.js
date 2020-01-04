import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
