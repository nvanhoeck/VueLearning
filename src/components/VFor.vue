<template>
  <div>
    <p v-for="person in persons">{{person.toString()}}</p>
    <p v-for="(person, i) in persons">{{person.toString()}} ({{i}})</p>
  </div>
</template>

<script>
  export default {
    name: 'VFor',
    data: function () {
      return {
        persons: ['Niko', 'Jolien', 'Mark', 'Wendy']
      }
    }
  }
</script>

<style scoped>

</style>
