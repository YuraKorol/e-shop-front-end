<template>
  <header class="header_container">
    <router-link to="/">Logo</router-link>
    <Navigation :categories='categories' />
    <HeaderCart />
  </header>
</template>

<script>
import { computed, onMounted } from 'vue'
import Navigation from './Navigation.vue'
import HeaderCart from './HeaderCart.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const categories = computed(() => store.getters.categories)
    onMounted(() => {
      store.dispatch('fetchCategories')
    })
    return {
      categories
    }
  },
  components: {
    Navigation,
    HeaderCart
  }
}
</script>

<style scoped>
  .header_container {
    display: flex;
    align-items: center;
    padding: 15px;
    box-shadow: 0 6px 4px -3px rgba(0, 0, 0, .4);
  }
</style>