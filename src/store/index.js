import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {cafes} from './modules/cafes'
import user from './modules/user'
import {brewMethods} from './modules/brewMethods'
export default new Vuex.Store({
  modules: {
    cafes,
    user,
    brewMethods
  },

})
