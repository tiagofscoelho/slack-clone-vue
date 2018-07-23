import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV === 'development'
Vue.use(Vuex)

export default new Vuex.Store<any>({
  modules: {

  },
  strict: debug
})
