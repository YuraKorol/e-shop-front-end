<template>
  <component :is='layout'>
    <router-view />
  </component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

export default {
  setup() {
    const route = useRoute()
    const layout = computed(() => (route.meta.layout || 'empty') + '-layout')
    return {
      layout
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
