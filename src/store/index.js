import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import city from './city'
import flight from './flight'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    city,
    flight
  }
})
