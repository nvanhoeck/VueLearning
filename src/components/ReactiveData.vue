<template>
  <div>
    <button v-on:click="counter++">Plus</button>
    <button v-on:click="counter--">Minus</button>
    <p>{{counter}}</p>
    <p>Result: {{result()}}</p>
    <p>Output: {{output}}</p>
  </div>
</template>

<script>
  export default {
    name: 'ReactiveData',
    data: function () {
      return {
        counter: 0
      }
    },
    //  Wordt alleen uitgevoerd als het properties heeft die gewijzigd worden
    computed: {
      output: function () {
        return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5'
      }
    },
    //  Word altijd uitgevoerd, zelfs als het geen properties heeft.
    methods: {
      result: function () {
        return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5'
      }
    }
  }
</script>

<style scoped>

</style>
