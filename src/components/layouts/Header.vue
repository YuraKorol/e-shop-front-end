<template>
  <header class="header_container">
    <div>
      Logo
    </div>
    <Navigation :categories='categories' />
  </header>
</template>

<script>
import { reactive } from 'vue'
import Navigation from './Navigation.vue'

export default {
  setup() {
    const categories = reactive([
      { title: 'PC', id: 1 },
      { title: 'PS4', id: 2 },
      { title: 'XBox', id: 3 }
    ])
    return {
      categories
    }
  },
  components: {
    Navigation
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