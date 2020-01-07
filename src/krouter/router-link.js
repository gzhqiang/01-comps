export default {
  // template: '<a>abc</a>' // runtime-only下不能编译模板，不能这样使用哦。
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h) {
    // console.log(this.$slots)
    return h(
      'a',
      {
        attrs: { href: this.to, name: 'link' },
        style: { fontSize: '30px', color: 'red' },
        // domProps: {
        //   innerHTML: 'foobar'
        // }
        props: {
          myProp: 'bar'
        }
      },
      this.$slots.default
    )
    // jsx
    // return <a href={'#' + this.to}>{this.$slots.default}</a>
  }
}
