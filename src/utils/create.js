import Vue from 'Vue'

export default function(Component, props) {
  const vm = new Vue({
    render(h) {
      return h(Component, { props })
    }
  }).$mount()

  document.body.appendChild(vm.$el)
  // 给组件添加销毁方法
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}
