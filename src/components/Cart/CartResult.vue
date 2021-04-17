<template>
  <div class="cart_product_result">
    <div style="display: flex; justify-content: space-around;">
      <h4>Quantity: {{ cartCount }}</h4>
      <h4>Total price: {{ cartTotalPrice }}$</h4>
    </div>
    <Button
      :bgColor="'green'"
      :borderRadius="5"
      :textColor="'white'"
      :height="30"
    >Buy</Button>
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue"
export default {
  props: {
    cartCount: {
      type: Number
    },
    cartTotalPrice: {
      type: Number
    }
  },
  components: {
    Button
  }
}
</script>

<style>
  .cart_product_result {
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-left: 15px
  }
</style>