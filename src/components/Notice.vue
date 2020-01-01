<template>
  <transition name="fade">
    <div class="box" v-if="isShow">
      <h3>{{ title }}</h3>
      <p class="box-content">{{ message }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
      console.log(this.duration, 'duration')
      setTimeout(this.hide, this.duration)
    },
    hide() {
      this.isShow = false
      // 清除自己
      this.remove()
    }
  }
}
</script>

<style>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: grey 3px solid;
  box-sizing: border-box;
  transition: all 1s;
}
.box-content {
  width: 200px;
  margin: 10px auto;
  font-size: 14px;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}

.fade-enter-active,
.fade-leave-action {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
