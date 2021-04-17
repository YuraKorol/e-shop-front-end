<template>
  <component :is='layout'>
    <router-view />
  </component>
  <ErrorMessage
    v-if="isError"
    :errorMessage="errorMessage"
    @clearError="clearError"
  ></ErrorMessage>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import ErrorMessage from './components/shared/ErrorMessage.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const isError = computed(() => store.getters.isError)
    const errorMessage = computed(() => store.getters.errorMessage)
    const clearError = () => {
      store.commit('clearError')
    }
    const layout = computed(() => (route.meta.layout || 'empty') + '-layout')
    return {
      layout,
      isError,
      errorMessage,
      clearError
    }
  },
  components: {
    MainLayout,
    ErrorMessage
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
  height: 100vh;
}
</style>
