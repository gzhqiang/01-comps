<template>
  <!-- 
      v-bind="$attrs"
      将attrs属性展开
    -->
  <input :type="type" :value="value" @input="handleInput" v-bind="$attrs" />
  <!-- {{ $attrs }} -->
</template>

<script>
export default {
  // 避免$attrs属性绑定到根元素
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    dispatch(componentName, eventName, params) {
      const parent = this.$parent || this.$root
      const name = parent.$options.name
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      parent && parent.$emit.call(parent, eventName, params)
    },
    handleInput(e) {
      this.$emit('input', e.target.value)
      // this.$emit('update:value', e.target.value)
      // 给parent发送一个事件
      // 这里需要改写成dispatch, 因为中间可能用了其他组件或元素包装，不一定就是parent
      // this.$parent.$emit('validate', e.target.value)
      this.dispatch('KFormItem', 'validate', e.target.value)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
