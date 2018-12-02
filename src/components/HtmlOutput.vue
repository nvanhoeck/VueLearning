<template>
  <div>
    <p>Go to <a>{{finishedLink}}</a></p>
    <p>Go to <a v-html="finishedLink"></a></p>
  </div>
</template>

<script>
  export default {
    name: 'HtmlOutput',
    data: function () {
      return {
        finishedLink: '<a href="http://www.google.com"/>Google</a>'
      }
    }
  }
</script>

<style scoped>

</style>
