<template>
  <router-link to="/cart">Cart - {{ cartCount }}</router-link>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const cartCount = computed(() => store.getters.cartCount)
    return {
      cartCount
    }
  }
}
</script>

<style>

</style>