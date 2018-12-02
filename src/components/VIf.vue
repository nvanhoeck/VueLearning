<template>
  <div>
    <p v-if="show">You can see me?</p>
    <p v-else>Now you see me!</p>
    <p>Can you also see me?</p>
    <!--V-show only hides the element, it doesn't remove it-->
    <p v-show="show">Am I showing?</p>
    <button @click="show = !show">Change</button>
  </div>
</template>

<script>
  export default {
    name: 'VIf',
    data: function () {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>

</style>
