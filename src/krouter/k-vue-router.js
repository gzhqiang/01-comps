import RouterLink from './router-link'
import RouterView from './router-view'

let Vue = null

class KVueRouter {
  constructor(options) {
    this.$options = options

    // this.route = {
    //   current: '/'
    // }
    // Vue.set(this.route, 'current', '/')
    Vue.util.defineReactive(this, 'current', '/')
    // console.dir(this)
    // this.route = Vue.observable({ current: '/' })

    // 监控url的变化
    window.addEventListener('hashchange', this.onHashChanged.bind(this))

    window.addEventListener('load', this.onHashChanged.bind(this))

    this.routerMap = {}
    this.$options.routes.forEach(route => {
      this.routerMap[route.path] = route
    })
  }

  onHashChanged() {
    // this.route.current = window.location.hash.slice(1)
    this.current = window.location.hash.slice(1)
    // Vue.set(this, 'current', this.current)
    // Vue.set(this.route, 'current', window.location.hash.slice(1))
  }
}

// 静态方法, Vue.use会调用这个方法, 并且把Vue构造函数传过来, install方法this指向为当前KVueRouter实例
KVueRouter.install = function(_Vue) {
  // 保存构造函数
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 实现两个全局的组件 router-link router-view
  Vue.component('router-link', RouterLink)

  Vue.component('router-view', RouterView)
}

export default KVueRouter
