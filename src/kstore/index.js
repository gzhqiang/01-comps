import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  },
  modules: {}
})
