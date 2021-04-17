import store from "."

export default {
  state: {
    isError: false,
    errorMessage: ''
  },
  mutations: {
    setError(state, payload) {
      state.errorMessage = payload
      state.isError = true
      setTimeout(() => {
        store.commit('clearError')
      }, 100000)
      
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
