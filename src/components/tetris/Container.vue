<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'TetrisContainer'
  }
</script>

<style scoped>
  .container {
    overflow: auto;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-color: whitesmoke;
  }
</style>
