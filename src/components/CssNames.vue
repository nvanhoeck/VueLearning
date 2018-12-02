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
    <div class="demo"
    :class="color">
    </div><div class="demo"
    :class="[color, {red: attachRed}]">
    </div>
    <input type="text" v-model="color"/>
  </div>
</template>

<script>
  export default {
    name: 'CssNames',
    data: function () {
      return {
        attachRed: false,
        attachGreen: false,
        attachBlue: false,
        color: 'purple'
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

  .purple{
    background-color: purple;
  }
</style>
