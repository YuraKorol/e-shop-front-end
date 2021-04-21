<template>
  <div class="payment_card_container">
    <div id="card" class="payment_card"></div>
    <Button
      :bgColor="'green'"
      :borderRadius="5"
      :textColor="'white'"
      :height="30"
      @click="purchase()"
    >Buy</Button>
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue"
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()
    let stripe = ref(window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY))
    let elements = ref(stripe.value.elements())
    let card = ref(null)

    onMounted(() => {
      card.value = elements.value.create('card')
      card.value.mount('#card')
    })
    const purchase = async () => {
      const intent = await store.dispatch('handleBuy')
      await stripe.value.confirmCardPayment(intent.client_secret, {
        payment_method: {
          card: card.value,
          billing_details: {
            name: 'Yurii',
          },
        },
      })
    }
    return {
      purchase
    }
  },
  components: {
    Button
  }
};
</script>

<style>
  .payment_card_container {
    width: 65%;
  }
  .payment_card {
    padding: 5px;
    border: 1px solid #dcdfe6;
    border-radius: 6px;
    margin: 10px 0px;
  }
</style>