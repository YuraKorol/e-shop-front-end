<template>
  <div class="product_list_container">
    <template v-if="products.length">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addProductToCart="addProductToCart"
      />
    </template>
    <h4 v-else>No one products!</h4>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    const store = useStore()
    const products = computed(() => store.getters.products)
    const addProductToCart = product => {
      store.dispatch('addProductToCart', product)
    }
    onMounted(() => {
      store.dispatch('fetchProducts')
    })
    return {
      products,
      addProductToCart
    }
  },
  components: {
    ProductCard
  },

}
</script>

<style scoped>
  .product_list_container {
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    width: 90%;
  }
</style>