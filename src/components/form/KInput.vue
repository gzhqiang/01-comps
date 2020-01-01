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
    handleInput(e) {
      this.$emit('input', e.target.value)
      // this.$emit('update:value', e.target.value)
      // 给parent发送一个事件
      this.$parent.$emit('validate', e.target.value)
    }
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
