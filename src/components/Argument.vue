<template>
  <div>
    <button v-on:click="increase(2, $event)">Click me!</button>
    <p>{{counter}}</p>
    <p v-on:mousemove="updateCoord">{{x}} - {{y}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Argument',
    data: function () {
      return {
        counter: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      increase: function (step, event) {
        this.counter += step
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
