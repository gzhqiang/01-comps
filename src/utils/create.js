import Notice from '../components/Notice'

const plugin = {}

function removeDom(e) {
  // e.target.parentNode && e.target.parentNode.removeChild(e.target)
}

plugin.install = Vue => {
  //
  const NoticeConstrutor = Vue.extend(Notice)

  NoticeConstrutor.prototype.close = function() {
    this.isShow = false
    // this.$el.addEventListener('transitionend', removeDom)
  }

  Vue.prototype.$create = (options = {}) => {
    const notice = new NoticeConstrutor()
    notice.$mount(document.createElement('div'))
    document.body.appendChild(notice.$el)
    console.log('options', options)
    notice.title = options.title
    notice.message = options.message
    const duration = options.duration || 2000
    setTimeout(() => {
      console.log(111)
      // notice.isShow = false
      notice.close()
      // document.body.removeChild(notice.$el)
      // notice.$destroy()
    }, duration)
  }
}

// function create(Component, props) {
//   const vm = new Vue({
//     render(h) {
//       return h(Component, { props })
//     }
//   }).$mount()

//   document.body.appendChild(vm.$el)
//   // 给组件添加销毁方法
//   const comp = vm.$children[0]
//   comp.remove = () => {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
//   return comp
// }
export default plugin
