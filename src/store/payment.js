import { postPaymentIntent } from "@/services/payment.service"

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async handleBuy({ getters, commit }) {
      try {
        const intent = await postPaymentIntent({ amount: getters.cartTotalPrice })
        return intent
      } catch(err) {
        commit('setError', err)
      }
    }
  },
  getters: {

  }
}
