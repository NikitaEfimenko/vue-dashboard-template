import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import rootModule from './rootModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    ...rootModule
})