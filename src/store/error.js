import store from "."

export default {
  state: {
    isError: false,
    errorMessage: ''
  },
  mutations: {
    setError(state, payload) {
      if(typeof payload === 'object') {
        state.errorMessage = payload.message
      } else {
        state.errorMessage = payload
      }
      state.isError = true
      setTimeout(() => {
        store.commit('clearError')
      }, 2000)
      
    },
    clearError(state) {
      state.isError = false
      state.errorMessage = ''
    }
  },
  actions: {

  },
  getters: {
    isError: state => state.isError,
    errorMessage: state => state.errorMessage
  }
}
