export default {
  render(h) {
    // 标记当前router-view深度
    this.$vnode.data.routerView = true
    let depth = 0
    let parent = this.$parent
    while (parent) {
      const vnodeData = parent.$vnode && parent.$vnode.data
      if (vnodeData) {
        if (vnodeData.routerView) {
          // 说明是routerView组件
          depth++
        }
      }
      parent = parent.$parent
    }

    /* 获取path对应的component
    let component = null
    this.$router.$options.routes.forEach(route => {
      if (route.path === this.$router.current) {
        component = route.component
      }
    })
    对以上forEach的优化
    this.$router.$options.routes.some(route => {
      if (route.path === this.$router.route.current) {
        // 找到即退出循环
        component = route.component
        return true
      }
    })
    // console.log(this.$router.route.current, this.$router.routerMap) */
    // const { routerMap, current } = this.$router
    // console.log(routerMap, current)
    // const component =
    //   (routerMap[current] && routerMap[current].component) || null
    // console.log(component, 'component')
    let component = null
    console.log(this.$router.matched)
    const route = this.$router.matched[depth]
    if (route) {
      component = route.component
    }
    return h(component)
  }
}
