<template>
  <div>
    <label v-if="label" for="">
      {{ label }}
    </label>
    <!-- 插槽搞起 -->
    <slot></slot>
    <!-- <h2>kformitem-{{ form.model }}</h2> -->
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

import emitter from '@/mixins/emitter'

export default {
  name: 'KFormItem',
  inject: ['form'],
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
    if (this.prop) {
      this.dispatch('KForm', 'form.addField', [this])
    }
  },
  watch: {},
  methods: {
    validate() {
      // 获取rules
      // 获取model
      // 当前值
      const val = this.form.model[this.prop]
      // 当前规则
      const rules = this.form.rules[this.prop]
      // 校验描述对象
      const desc = { [this.prop]: rules }
      // 创建schema实例
      const schema = new Schema(desc)
      // 返回的是Promise对象
      return schema.validate({ [this.prop]: val }, errors => {
        console.log(errors)
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
  components: {}
}
</script>

<style scoped lang="scss"></style>
