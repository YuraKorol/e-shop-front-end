<template>
  <div class="home">
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/Home/ProductList.vue'

export default {
  name: "Home",
  components: {
    ProductList
  }
};
</script>
