<template>
  <div>
    <p><span>{{msg}}</span><span>{{getName ()}}</span></p>
  </div>
</template>

<script>

  export default {
    name: 'Templates',
    data () {
      return {
        msg: 'Hello ',
        name: 'Niko'
      }
    },
    methods: {
      getName: function () {
        return this.name
      }
    }
  }
</script>

<style scoped>

</style>
