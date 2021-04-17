<template>
  <div class="cart_page_container">
    <CartProductsList />
    <CartResult
      :cartCount="cartCount"
      :cartTotalPrice="cartTotalPrice"
    />
  </div>
</template>

<script>
import CartProductsList from '@/components/Cart/CartProductsList.vue'
import CartResult from '@/components/Cart/CartResult.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()
    const cartCount = computed(() => store.getters.cartCount)
    const cartTotalPrice = computed(() => store.getters.cartTotalPrice)
    return {
      cartCount,
      cartTotalPrice
    }
  },
  components: {
    CartProductsList,
    CartResult
  }
}
</script>

<style>
  .cart_page_container {
    width: 100%;
  }
</style>