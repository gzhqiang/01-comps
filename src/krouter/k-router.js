let Vue

class KVueRouter {
  constructor(options) {
    this.$options = options

    // this.current = '/'

    Vue.util.defineReactive(this, 'current', '/')

    // 监控url的变化
    window.addEventListener('hashchange', this.onHashChanged.bind(this))

    window.addEventListener('load', this.onHashChanged.bind(this))
  }

  onHashChanged() {
    this.current = window.location.hash.slice(1)
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
  Vue.component('router-link', {
    // template: '<a>abc</a>' // runtime-only下不能编译模板，不能这样使用哦。
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      console.log(this.$slots)
      // return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
      // jsx
      return <a href={'#' + this.to}>{this.$slots.default}</a>
    }
  })

  Vue.component('router-view', {
    render(h) {
      // 获取path对应的component
      let component = null
      // this.$router.$options.routes.forEach(route => {
      //   if (route.path === this.$router.current) {
      //     component = route.component
      //   }
      // })
      // 对以上forEach的优化
      this.$router.$options.routes.some(route => {
        if (route.path === this.$router.current) {
          // 找到即退出循环
          component = route.component
          return true
        }
      })
      return h(component)
    }
  })
}

export default KVueRouter
