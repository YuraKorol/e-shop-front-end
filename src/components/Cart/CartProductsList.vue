<template>
  <div class="cart_list_container">
    <template v-if="cartProducts.length">
      <CartProductCard
        v-for="cartProduct in cartProducts"
        :key="cartProduct.id"
        :cartProduct="cartProduct"
        @deleteProductFromCart="deleteProductFromCart"
      />
    </template>
    <h4 v-else>Cart is empty!</h4>
  </div>
</template>

<script>
import { computed } from 'vue'
import CartProductCard from './CartProductCard.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const cartProducts = computed(() => store.getters.cart)
    const deleteProductFromCart = (cartProduct) => {
      store.commit('deleteProductFromCart', cartProduct)
    }
    return {
      cartProducts,
      deleteProductFromCart
    }
  },
  components: {
    CartProductCard
  }
}
</script>

<style scoped>
  .cart_list_container {
    display: inline-flex;
    flex-direction: column;
    gap: 20px;
    width: 65%;
  }
</style>