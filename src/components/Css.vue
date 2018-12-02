<template>
  <div class="container">
    <div class="demo"
         @click="attachRed = !attachRed"
         :class="{red: attachRed}"
    >
    </div>
    <div class="demo"
         @click="attachBlue = !attachBlue"
         :class="{blue: attachBlue}"
    >
    </div>
    <div class="demo"
         @click="attachGreen = !attachGreen"
         :class="{green: attachGreen}"
    >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Css',
    data: function () {
      return {
        attachRed: false,
        attachGreen: false,
        attachBlue: false
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }
  .demo {
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: grey;
    cursor: pointer;
  }

  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }
</style>
