<template>
  <div class="cart_page_container">
    <CartProductsList />
    <template v-if="cartCount">
      <CartResult
        :cartCount="cartCount"
        :cartTotalPrice="cartTotalPrice"
      />
      <PaymentCard />
    </template>
  </div>
</template>

<script>
import CartProductsList from '@/components/Cart/CartProductsList.vue'
import CartResult from '@/components/Cart/CartResult.vue'
import PaymentCard from '@/components/Cart/PaymentCard.vue'
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
    PaymentCard
  }
}
</script>

<style>
  .cart_page_container {
    width: 100%;
  }
</style>