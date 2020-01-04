export default {
  render(h) {
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
    console.log(this.$router.route.current, this.$router.routerMap) */
    const { routerMap, current } = this.$router
    console.log(routerMap, current)
    const component =
      (routerMap[current] && routerMap[current].component) || null
    // console.log(component, 'component')
    return h(component)
  }
}
