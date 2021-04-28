<template>
  <div class="cart_page_container">
    <CartProductsList v-if="cartCount" />
    <h4 v-if="!cartCount">Cart is empty!</h4>
    <CartResult
      v-if="cartCount"
      :cartCount="cartCount"
      :cartTotalPrice="cartTotalPrice"
    />
    <PaymentForm v-if="cartCount" />
  </div>
</template>

<script>
import CartProductsList from '@/components/Cart/CartProductsList.vue'
import CartResult from '@/components/Cart/CartResult.vue'
import PaymentForm from '@/components/Cart/PaymentForm.vue'
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
    CartResult,
    PaymentForm
  }
}
</script>

<style>
  .cart_page_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 50%;
  }
</style>