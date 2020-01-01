<template>
  <div class="hello">
    <!-- 使用input -->
    <!-- v-model使用在自定义组件上 -->
    <index></index>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <!-- 两种用法 1.默认插槽-->
        <template v-slots:default>
          <k-input
            v-model="model.username"
            placeholder="请输入用户名"
          ></k-input>
        </template>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <!-- 2.匿名插槽 -->
        <k-input
          v-model="model.password"
          type="password"
          placeholder="请输入密码"
        ></k-input>
      </k-form-item>
      <k-form-item>
        <!-- <k-input type="button" value="登录"></k-input> -->
        <button @click.prevent="handleLogin">登录</button>
      </k-form-item>
      <!-- 这个就是上面的原理?? 
      以下两种方式都可以的。
      不过第一种实用的时候还需要添加method，第二种可以直接在k-input组件内完成修改。
      -->
      <!-- <k-input :value="model.username" @input="handleInput"></k-input>
      <k-input :value.sync="model.username"></k-input>

      <h2>{{ model.username }}</h2>
      <h2>{{ model.password }}</h2> -->
    </k-form>
  </div>
</template>

<script>
import KForm from '@/components/form/KForm'
import KFormItem from '@/components/form/KFormItem'
import KInput from '@/components/form/KInput'
// import Notice from '@/components/Notice'
import index from '@/components/communication/index'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入4-10位', pattern: /^d[a-z]{4,10}$/ }
        ],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  components: {
    KInput,
    KFormItem,
    KForm,
    index
  },
  methods: {
    // handleInput(val) {
    //   // console.log(val)
    //   this.model.username = val
    // }
    handleLogin() {
      this.$refs.loginForm.validated(valid => {
        // this.$create(Notice, {
        //   title: '社会你杨哥喊你来搬砖',
        //   message: '提示信息',
        //   duration: 1000
        // }).show()
        this.$notice({
          title: '社会你杨哥喊你来搬砖',
          message: '提示信息',
          duration: 1000
        })
        // this.$create(Notice, {
        //   title: '社会你杨哥喊你来搬砖',
        //   message: '提示信息',
        //   duration: 1000
        // }).show()
        // if (valid) {
        //   alert('登陆成功')
        // } else {
        //   console.log('登录失败')
        // }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
