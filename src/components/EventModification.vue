<template>
  <div>
    <button v-on:click="increase(2, $event)">Click me!</button>
    <p>{{counter}}</p>
    <p v-on:mousemove="updateCoord">
      {{x}} - {{y}}
      <br/><span v-on:mousemove="stopProp">Dead Spot</span>
      <br/><span v-on:mousemove.stop>Modifier</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'EventModification',
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
      },
      stopProp: function (event) {
        event.stopPropagation()
      }
    }
  }
</script>

<style scoped>

</style>
