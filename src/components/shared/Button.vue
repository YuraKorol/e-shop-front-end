<template>
  <button :style="{
    backgroundColor: bgColor,
    width: `${width}%`,
    height: `${height}px`,
    color: textColor,
    borderRadius: `${borderRadius}px`
  }">
    <slot />
  </button>
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
      default: 25
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    textColor: {
      type: String,
      default: 'black'
    },
    borderRadius: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
  button {
    border: none;
    font-size: 15px;
    outline: none;
    cursor: pointer;
  }
</style>