import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {cafes} from './modules/cafes'
import user from './modules/user'

export default new Vuex.Store({
  modules: {
    cafes,
    user
  },

})
