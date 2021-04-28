<template>
  <div class="payment_card_container">
    <div id="card" class="payment_card"></div>
    <div class="payment_card_input_container">
      <Input
        :placeholder="'Full name'"
        v-model:value="orderData.fullName"
      />
      <Input
        :placeholder="'Address'"
        v-model:value="orderData.address"
      />
    </div>
    <div class="payment_card_input_container">
      <Input
        :placeholder="'Phone number'"
        v-model:value="orderData.phoneNumber"
      />
      <Input
        :placeholder="'Email'"
        :type="'email'"
        v-model:value="orderData.email"
      />
    </div>
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
import Input from "@/components/shared/Input.vue"
import Button from "@/components/shared/Button.vue"
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()
    let stripe = ref(window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY))
    let elements = ref(stripe.value.elements())
    let card = ref(null)

    const orderData = reactive({
      fullName: '',
      address: '',
      phoneNumber: '',
      email: ''
    })

    onMounted(() => {
      card.value = elements.value.create('card')
      card.value.mount('#card')
    })
    const purchase = async () => {
      const intent = await store.dispatch('handleBuy', {
        ...orderData,
        products: store.getters.cart
      })
      console.log(intent)
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
      purchase,
      orderData
    }
  },
  components: {
    Button,
    Input
  }
};
</script>

<style scoped>
  .payment_card_container {
    width: 50%;
    min-width: 250px;
    margin-bottom: 70px;
  }
  .payment_card {
    padding: 5px;
    border: 1px solid #dcdfe6;
    border-radius: 6px;
    margin: 10px 0px;
  }
  .payment_card_input_container {
    display: inline-flex;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
  }
</style>