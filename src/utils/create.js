import Vue from 'vue'
// import Notice from '../components/Notice'

// const plugin = {}

// function removeDom(e) {
//   // e.target.parentNode && e.target.parentNode.removeChild(e.target)
// }

// plugin.install = Vue => {
//   //
//   const NoticeConstructor = Vue.extend(Notice)

//   NoticeConstructor.prototype.close = function() {
//     this.isShow = false
//     // this.$el.addEventListener('transitionend', removeDom)
//   }

//   Vue.prototype.$create = (options = {}) => {
//     const notice = new NoticeConstructor()
//     notice.$mount(document.createElement('div'))
//     document.body.appendChild(notice.$el)
//     console.log('options', options)
//     notice.title = options.title
//     notice.message = options.message
//     const duration = options.duration || 2000
//     setTimeout(() => {
//       // notice.isShow = false
//       notice.close()
//       // document.body.removeChild(notice.$el)
//       // notice.$destroy()
//     }, duration)
//   }
// }

function create(Component, options) {
  const ComponentConstructor = Vue.extend(Component)
  const comp = new ComponentConstructor({
    propsData: options
  })
  comp.$mount(document.createElement('div'))
  document.body.appendChild(comp.$el)
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}
export default create
