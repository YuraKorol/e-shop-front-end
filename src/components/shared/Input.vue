<template>
  <input
    :type="type"
    :style="{
      width: `${width}%`,
      height: `${height}px`
    }"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('update:value', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 15
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  input {
    border: 1px solid #dcdfe6;
    border-radius: 6px;
    padding: 5px;
    outline: none;
  }
</style>