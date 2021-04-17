export default {
  state: {
    cart: []
  },
  mutations: {
    setProductToCart(state, product) {
      state.cart.push(product)
    },
    deleteProductFromCart(state, product) {
      state.cart = state.cart.filter(item => product._id !== item._id)
    }
  },
  actions: {
    addProductToCart({ commit, state }, product) {
      const checkContain = state.cart.some(obj => obj._id === product._id)
      if(!checkContain) {
        commit('setProductToCart', product)
      } else {
        commit('setError' ,'This game is already in the cart.')
      }
    },
    deleteProductFromCart({ commit }, product) {
      commit("deleteProductFromCart", product)
    }
  },
  getters: {
    cart: state => state.cart,
    cartCount: state => state.cart.length,
    cartTotalPrice: state => state.cart.reduce((prev, curr) => prev + curr.price, 0)
  }
}
