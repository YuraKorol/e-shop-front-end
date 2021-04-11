<template>
  <ul class="nav_list_container">
    <router-link
      :to="`/category/${category.id}`"
      tag="li"
      class="nav_link"
      v-for="category in categories"
      :key="category.id"
    > {{ category.title }} </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .nav_list_container {
    margin: 0 auto;
    list-style: none;
  }
  .nav_link {
    margin: 0px 10px;
    color: black;
    text-decoration: none;
  }
</style>