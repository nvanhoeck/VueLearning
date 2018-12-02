<template>
  <div>
    <div>
      <div v-for="(person, index) in persons">
        <h1>{{person}}</h1>
        <p>{{index}}</p>
      </div>
    </div>
    <div>
      <div v-for="block in blocks">
        <div :style="{backgroundColor: block.color, width: 50 + 'px', height: 50 +'px', margin: 10 +'px'}"></div>
      </div>
    </div>
    <div v-for="n in 10">
      <p>{{n}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VForTemplates',
    data: function () {
      return {
        persons: ['Niko', 'Jolien', 'Wendy', 'Mark'],
        blocks: [
          {color: 'red'},
          {color: 'blue'},
          {color: 'green'},
          {color: 'purple'},
          {color: 'yellow'},
          ]
      }
    }
  }
</script>

<style scoped>

</style>
