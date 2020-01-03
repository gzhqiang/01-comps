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
    const component = routerMap[current].component || null
    return h(component)
  }
}
