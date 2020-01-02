<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'KForm',
  componentName: 'KForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {
    this.fields = []
    this.$on('form.addField', field => {
      this.fields.push(field)
    })
  },
  mounted() {},
  watch: {},
  methods: {
    validated(cb) {
      // 这里需要改掉$children
      console.log(this.$children)
      const tasks = this.fields.map(item => item.validate())
      // const tasks = this.$children
      //   .filter(item => item.prop)
      //   .map(item => item.validate())
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
