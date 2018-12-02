<template>
  <div>
    <button v-on:click="counter++">Click me!</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Watch',
    data: function () {
      return {
        counter: 0
      }
    },
    watch: {
      counter: function (value) {
        // For asynchronous calls
        var vm = this
        setTimeout(function () {
          vm.counter = 0
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>
