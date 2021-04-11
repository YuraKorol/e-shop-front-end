<template>
  <div
    class="product_card_container"
    v-for="product in products"
    :key="product.id"
  >
    <div class="product_card_img" :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
    <h4>{{ product.title }}</h4>
    <p>Price: <strong>{{ product.price }}$</strong></p>
    <Button
      :bgColor="'black'"
      :textColor="'white'"
      :width="30"
      :height="30"
      :borderRadius="5"
    >Buy</Button>
  </div>
</template>

<script>
import Button from '@/components/shared/Button.vue'

export default {
  props: {
    products: {
      type: Array
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
  .product_card_container {
    border-radius: 15px;
    padding: 6px 6px 20px 6px;
    width: 22%;
    min-width: 220px;
    margin: 10px auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  .product_card_container h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product_card_img {
    height: 250px;
    background-position: center;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>