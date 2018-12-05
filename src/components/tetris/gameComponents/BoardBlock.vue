<template>
  <div class="tile" :class="isActive || isFilled ? tileColor : 'grey'">
    <p class="index row" v-if="x === 0">{{y}}</p>
    <p class="index" v-else>{{x}}</p>
  </div>
</template>

<script>
  export default {
    name: 'BoardBlock',
    data: function () {
      return {
        isActive: false,
        tileColor: 'grey',
        isFilled: false
      }
    },
    props: {
      x: Number,
      y: Number
    },
    methods: {
      changeActivation: function(value){
        this.isActive = value
      },
      changeFilled: function(value){
        this.isActive != value;
        this.isFilled = value;
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
