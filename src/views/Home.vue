<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p @click="$store.commit('increment')">
      counter:{{ $store.state.counter }}
    </p>
    <p @click="$store.dispatch('increment')">
      async:{{ $store.state.counter }}
    </p>
    <!-- <p>double counter: {{ $store.getters.doubleCounter }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
