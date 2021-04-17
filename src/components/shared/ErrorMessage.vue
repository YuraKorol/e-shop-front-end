<template>
  <div class="error_message_container">
    <span>{{ errorMessage }}</span>
    <Button
      :textColor="'#953b35'"
      :fontSize="18"
      :width="20"
      @click="$emit('clearError')"
    >Close</Button>
  </div>
</template>

<script>
import Button from '@/components/shared/Button.vue'

export default {
  props: {
    errorMessage: {
      type: String
    }
  },
  components: {
    Button
  }
}
</script>

<style>
  .error_message_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 10px;
    padding: 0px 10px;
    height: 70px;
    width: 30%;
    min-width: 250px;
    background-color: #333333;
  }
  .error_message_container > span {
    color: white;
  }
</style>