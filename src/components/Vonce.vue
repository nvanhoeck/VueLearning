<template>
<div>
  <h1 v-once>{{title}}</h1>
  <h1>{{title}}</h1>
  <h2>{{getTitle()}}</h2>
</div>
</template>

<script>
  export default {
    name: 'Vonce',
    data: function () {
      return {
        title: 'Main'
      }
    },
    methods: {
      getTitle () {
        this.title = 'Subtitle'
        return this.title
      }
    }
  }
</script>

<style scoped>

</style>
