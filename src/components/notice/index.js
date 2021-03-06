import Notice from './Notice.vue'
import create from '@/utils/create'

// const plugin = {}

// plugin.install = Vue => {
//   Vue.prototype.$notice = options => {
//     create(Notice, options).show()
//   }
// }

// export default plugin

export default {
  install(Vue) {
    // console.log('notice', this, Vue)
    Vue.prototype.$notice = options => {
      create(Notice, options).show()
    }
  }
}
