import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showConsole: true,
    consoleText: ''
  },
  mutations: {
    toggleConsole: state => { state.showConsole = !state.showConsole },
    pushToConsole: (state, message) => { state.consoleText += message + '\n' }
  },
  actions: {
  },
  modules: {
  }
})
