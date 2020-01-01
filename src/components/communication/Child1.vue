<template>
  <div>
    <button v-on="$listeners">点击</button>
    <Child2 v-on="$listeners"></Child2>
  </div>
</template>

<script>
import Child2 from './Child2'

export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Child2
  }
}
</script>

<style scoped lang="scss"></style>
