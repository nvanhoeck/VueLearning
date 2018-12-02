<template>
  <div class="container">
    <div class="block"
         :style="{backgroundColor: color}"
         @click="updateColor()"
         v-once
    ></div>
    <div class="block"
         :style="{backgroundColor: color}"
         @click="updateColor()"
    ></div>
    <div class="block"
         :style="{backgroundColor: color}"
         @click="updateColor()"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'BindStyle',
    data: function () {
      return {
        colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
        color: ''
      }
    },
    methods: {
      updateColor: function () {
        console.log(Math.floor(Math.random() * this.colors.length))
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .block {
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: grey;
  }
</style>
