<template>
  <!--<div id="app">
    <img src="./assets/logo.png">
    {{title}}
    <router-view/>
  </div>-->
  <router-view/>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .button{
    border-radius: 25px;
    border: 0;
    height: 50px;
    cursor: pointer;
  }
  .button:hover {
    border-bottom: solid 5px;
    font-weight: 700;
  }
  .title{
    color: #e84c3d;
    font-family: 'Raleway', sans-serif;
    font-variant: small-caps;
    font-size: 60px;
    text-align: center;
    font-weight: 400;
    margin-left: 0;
    margin-right: 0;
  }
  .button-font{
    color: #eee;
    /*font-family: "Open Sans Semibold",sans-serif;*/
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }
  .large{
    width: 250px;
  }
  .medium {
    width: 150px;
  }
  .center{
    margin-right: 0;
    margin-left: 0;
  }
  .blue-green{
    background-color: #1cbb9b;
    border-color: #16a086 !important;
  }
  .green{
    background-color: #2dcc70;
    border-color: #27ae61 !important;
  }
  .blue{
    background-color: #3598db;
    border-color: #2a7fb8 !important;
  }
  .purple{
    background-color: #9a59b5;
    border-color: #8d44ad !important;
  }
  .dark{
    background-color: #354a5f;
    border-color: #2d3e52 !important;
  }
  .yellow{
    background-color: #ffcc33;
    border-color: #f39c11 !important;
  }
  .orange{
    background-color: #f06d24;
    border-color: #d25302 !important;
  }
  .red{
    background-color: #e84c3d;
    border-color: #c23a2c !important;
  }
  .white{
    background-color: #f3f3f3;
    border-color: #bfc2c7 !important;
  }
  .grey{
    background-color: #96a4a5;
    border-color: #7e8c8d !important;
  }
</style>
