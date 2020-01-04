let Vue = null
class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    this._wrapperGetters = options.getters

    const computed = {}
    this.getters = {}

    Object.keys(this._wrapperGetters).forEach(key => {
      // 获取用户定义的getter
      const fn = this._wrapperGetters[key]
      computed[key] = () => {
        return fn(this.state)
      }
      Object.defineProperty(this.getters, key, {
        get: () => this._vm[key]
      })
    })

    this._vm = new Vue({
      // 这样做只是为了响应式
      data: {
        // 两个$符号表明这个属性是只读的
        $$state: options.state
      },
      computed
    })

    // 绑定this
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    // console.log(this._vm)
    // console.log(this)
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
