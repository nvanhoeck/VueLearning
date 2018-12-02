<template>
  <div>
    <input type="text" v-on:keyup="inputCalled">
  </div>
</template>

<script>
  export default {
    name: 'KeyListening',
    methods: {
      inputCalled: function () {
        console.log('Button pressed')
      }
    }
  }
</script>

<style scoped>

</style>
