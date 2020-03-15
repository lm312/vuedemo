import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 接着上面的代码

const state = {
  count: 0
}

export default new Vuex.Store({
  state
})
