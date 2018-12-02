<template>
  <div>
    <input type="text" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: 'TwoWay',
    data: function () {
      return {
        name: ''
      }
    }
  }
</script>

<style scoped>

</style>
