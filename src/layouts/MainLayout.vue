<template>
  <Header />
  <router-view class="main_content_container" />
</template>

<script>
import Header from '@/components/layouts/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  .main_content_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
</style>