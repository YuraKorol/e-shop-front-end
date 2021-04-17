<template>
  <div class="cart_product_card_container">
    <div
      class="cart_product_card_img"
      :style="{ backgroundImage: `url(${cartProduct.imageUrl})` }"
    ></div>
    <div class="cart_product_card_content">
      <h5>{{cartProduct.title}}</h5>
      <h4>{{cartProduct.price}}$</h4>
    </div>
    <div class="cart_product_card_right_content">
      <Button @click="$emit('deleteProductFromCart', cartProduct)">X</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/shared/Button.vue'

export default {
  props: {
    cartProduct: {
      type: Object
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
  .cart_product_card_container {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 7px;
    width: 100%;
    height: 100px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  .cart_product_card_img {
    min-width: 100px;
    background-position: center;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .cart_product_card_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 2px 10px;
  }
  .cart_product_card_right_content {
    display: flex;
    width: 22px;
  }
  .cart_product_card_content > * {
    margin: 0;
  }
</style>