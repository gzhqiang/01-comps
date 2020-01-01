<template>
  <div>
    <Child1 @click="handleClick"></Child1>
  </div>
</template>

<script>
import Child1 from './Child1'
export default {
  props: {},
  data() {
    return {
      name: 'zqguo'
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClick() {
      console.log('来自index的点击事件', this.name)
    }
  },
  components: {
    Child1
  }
}
</script>

<style scoped lang="scss"></style>
