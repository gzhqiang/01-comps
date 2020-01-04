let Vue = null
class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    //
    // this.state = new Vue({
    //   data: options.state
    // })

    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })

    // 绑定this
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(v) {
    console.error('你这样不好')
  }

  // store.commit('add', 1)
  commit(type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}
