import { createStore } from "vuex";
import product from './product'
import category from './category'
import cart from './cart'
import error from './error'

export default createStore({
  modules: {
    product,
    category,
    cart,
    error
  },
});
