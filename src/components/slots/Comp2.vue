<template>
  <div>
    <slot :foo="foo"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 'foo bar bar'
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped></style>
