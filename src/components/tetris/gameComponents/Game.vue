<template>
  <div>
    <Board ref="board"></Board>
  </div>
</template>

<script>
  import Board from '@/components/tetris/gameComponents/Board'
  import Straight from '@/components/tetris/gameComponents/tetrominos/StraightTetromino'

  export default {
    name: 'Game',
    props: {
      isPlaying: Boolean
    },
    components: {Board},
    data: function () {
      return {
        tetrominos: [new Straight(0, 5)],
        activeTetromino: undefined,
        posX: 0,
        posY: 0,
      }
    },
    methods: {
      drawNewTetromino: function () {
        this.activeTetromino = this.tetrominos[0]
        this.posX = 5
        this.posY = 1
        this.determineLocation()
      },
      determineLocation: function () {
        let index = 0;
        for (const block of this.activeTetromino.blocks) {
          let x = block.metricsToCenter[this.activeTetromino.currentState].x + this.posX
          let y = block.metricsToCenter[this.activeTetromino.currentState].y + this.posY
          this.$refs.board.setActive(x,y,this.activeTetromino.color)
        }
      }
    },
    watch: {
      isPlaying: function (newValue, oldValue) {
        if (newValue && undefined === this.activeTetromino) {
          this.drawNewTetromino()
        }
      }
    }
  }
</script>

<style scoped>

</style>
