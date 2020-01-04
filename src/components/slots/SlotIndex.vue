<template>
  <div>
    <comp1>
      <template v-slot:default>
        <div>默认插槽</div>
      </template>
      <template v-slot:content>
        内容nnn
      </template>
    </comp1>
    <comp2>
      <!-- // 作用域插槽 -->
      <template v-slot:default="slotProps">
        <!-- 让插槽能够访问子组件的数据 -->
        <div>来自子组件的数据 {{ slotProps }}</div>
      </template>
    </comp2>
  </div>
</template>

<script>
import Comp1 from './Comp1'
import Comp2 from './Comp2'

export default {
  data() {
    return {}
  },
  components: {
    Comp1,
    Comp2
  }
}
</script>

<style lang="scss" scoped></style>
