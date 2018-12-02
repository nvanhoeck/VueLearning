<template>
  <div>
    <button v-on:click="increase">Click me!</button>
    <p>{{counter}}</p>
    <p v-on:mousemove="updateCoord">{{x}} - {{y}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Events',
    data: function () {
      return {
        counter: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      increase: function () {
        this.counter++
      },
      updateCoord: function (event) {
        this.x = event.clientX
        this.y = event.clientY
      }
    }
  }
</script>

<style scoped>

</style>
