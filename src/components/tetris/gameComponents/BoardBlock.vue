<template>
  <div class="red tile" :class="color">
    <p class="index row" v-if="x === 1">{{y}}</p>
    <p class="index" v-else>{{x}}</p>
  </div>
</template>

<script>
  export default {
    name: 'BoardBlock',
    props: {
      x: Number,
      y: Number
    },
    data: function () {
      return {
        isActive: false,
        color: 'grey'
      }
    }
  }
</script>

<style scoped>
  .tile {
    width: 25px;
    height: 25px;
    z-index: 10;
    margin: 0;
    padding: 0;
    border: solid 2px;
  }

  .index {
    margin: 0;
    padding: 0;
    font-size: 10px;
    color: white;
  }

  .index.row {
    color: #f00;
  }

</style>
