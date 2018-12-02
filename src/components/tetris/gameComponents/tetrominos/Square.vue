<script>
  export default {
    //TODO
    name: 'Straight',
    props: {
      currentX: Number,
      currentY: Number
    },
    data: function () {
      return {
        color: 'blue-green',
        blocks: [
          {
            metricsToCenter: [
              {x: 0, y: 2},
              {x: 2, y: 0},
              {x: 0, y: 1},
              {x: -1, y: 0},
            ]
          },
          {
            metricsToCenter: [
              {x: 0, y: 1},
              {x: 1, y: 0},
              {x: 0, y: -1},
              {x: 0, y: 1}
            ]
          },
          {
            metricsToCenter: [
              {x: 0, y: 0},
              {x: 0, y: 0},
              {x: 0, y: 0},
              {x: 0, y: 0},
            ]
          },
          {
            metricsToCenter: [
              {x: 0, y: 1},
              {x: -1, y: 0},
              {x: 0, y: -1},
              {x: 1, y: 0}
            ]
          },
        ],
        currentState: 0,
        centerBlock: 2,
        isActive: true
      }
    }
  }
</script>

<style scoped>

</style>
