<template>
  <div>
    <button v-on:click="counter++">Click me!</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Javascript',
    data: function () {
      return {
        counter: 0
      }
    }
  }
</script>

<style scoped>

</style>
