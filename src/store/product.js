import { getAllProducts, getOneProduct } from '@/services/products.service'

export default {
  state: {
    product: {},
    products: [],
    productError: null
  },
  mutations: {
    setProduct(state, product) {
      state.product = product
    },
    setProducts(state, products) {
      state.products = products
    },
    setProductError(state, error) {
      state.productError = error
    }
  },
  actions: {
    async fetchProduct({ commit }, id) {
      try {
        const product = await getOneProduct(id)
        commit('setProduct', product)
      } catch (error) {
        commit('setProductError', error)
      }
    },
    async fetchProducts({ commit }) {
      try {
        const products = await getAllProducts()
        commit('setProducts', products)
      } catch (error) {
        commit('setProductError', error)
      }
    }
  },
  getters: {
    product: state => state.product,
    products: state => state.products,
    productError: state => state.productError
  }
}
