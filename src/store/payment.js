import { postPaymentIntent } from "@/services/payment.service"

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async handleBuy({ getters, commit }, orderData) {
      try {
        const intent = await postPaymentIntent({ amount: getters.cartTotalPrice, ...orderData })
        console.log(intent)
        return intent
      } catch(err) {
        commit('setError', err)
      }
    }
  },
  getters: {

  }
}
