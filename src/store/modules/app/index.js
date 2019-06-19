const state = {
  drawer: true
}

export default {
	namespaced: true,
	state,
  getters: {},
  mutations: {
		drawer: (state, v) => state.drawer = v 
	},
  actions: {}
}