<template>
  <div class="cart_product_result">
      <h4>Quantity: {{ cartCount }}</h4>
      <h4>Total price: {{ cartTotalPrice }}$</h4>
  </div>
</template>


<script>
export default {
  props: {
    cartCount: {
      type: Number
    },
    cartTotalPrice: {
      type: Number
    }
  }
}
</script>

<style>
  .cart_product_result {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>