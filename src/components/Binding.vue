<template>
  <div>
    <a v-bind:href="link">Google</a>
  </div>
</template>

<script>
  export default {
    name: 'Binding',
    data: function () {
      return {
        link: 'http://www.google.be/'
      }
    }
  }
</script>

<style scoped>

</style>
