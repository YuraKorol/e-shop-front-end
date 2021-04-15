import { getAllCategories, getOneCategory } from '@/services/categories.service'

export default {
  state: {
    category: {},
    categories: [],
    categoryError: null
  },
  mutations: {
    setCategory(state, category) {
      state.category = category
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setCategoryError(state, error) {
      state.categoryError = error
    }
  },
  actions: {
    async fetchCategory({ commit }, id) {
      try {
        const category = await getOneCategory(id)
        commit('setCategory', category)
      } catch (error) {
        commit('setCategoryError', error)
      }
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await getAllCategories()
        commit('setCategories', categories)
      } catch (error) {
        commit('setCategoryError', error)
      }
    }
  },
  getters: {
    category: state => state.category,
    categories: state => state.categories,
    categoryError: state => state.categoryError
  }
}
