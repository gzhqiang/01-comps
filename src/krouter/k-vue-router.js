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
    // Vue.util.defineReactive(this, 'current', '/')
    // console.dir(this)
    // this.route = Vue.observable({ current: '/' })
    this.current = window.location.hash.slice(1) || '/'
    Vue.util.defineReactive(this, 'matched', [])
    this.match()

    // 监控url的变化
    window.addEventListener('hashchange', this.onHashChanged.bind(this))

    window.addEventListener('load', this.onHashChanged.bind(this))

    // this.routerMap = {}
    // this.$options.routes.forEach(route => {
    //   this.routerMap[route.path] = route
    // })
  }

  onHashChanged() {
    // this.route.current = window.location.hash.slice(1)
    this.current = window.location.hash.slice(1) || '/'
    this.matched = []
    this.match()
    // Vue.set(this, 'current', this.current)
    // Vue.set(this.route, 'current', window.location.hash.slice(1))
  }

  match(routes) {
    routes = routes || this.$options.routes
    // 递归遍历路由表
    // routes.forEach(route => {
    //   if(route.path === '/' && this.current === '/') {
    //     this.matched.push(route)
    //   }
    // })
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === '/' && this.current === '/') {
        this.matched.push(routes[i])
        return
      }
      // /about/user
      if (
        routes[i].path !== '/' &&
        // routes[i].path.indexOf(this.current) !== -1
        this.current.indexOf(routes[i].path) !== -1
      ) {
        this.matched.push(routes[i])
        if (routes[i].children) {
          // for (child of routes[i].children) {
          //   this.match(child)
          // }
          this.match(routes[i].children)
        }
        return
      }
    }
  }

  static install(_Vue) {
    Vue = _Vue

    // 这里是根组件把router实例传进去了，挂载到$options属性上面
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
}

// 静态方法, Vue.use会调用这个方法, 并且把Vue构造函数传过来, install方法this指向为当前KVueRouter实例
// KVueRouter.install = function(_Vue) {
//   // 保存构造函数
//   Vue = _Vue

//   // 这里是根组件把router实例传进去了，挂载到$options属性上面
//   Vue.mixin({
//     beforeCreate() {
//       if (this.$options.router) {
//         Vue.prototype.$router = this.$options.router
//       }
//     }
//   })

//   // 实现两个全局的组件 router-link router-view
//   Vue.component('router-link', RouterLink)

//   Vue.component('router-view', RouterView)
// }

export default KVueRouter
