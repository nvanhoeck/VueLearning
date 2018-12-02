<template>
  <Board></Board>
</template>

<script>
  import Board from "@/components/tetris/gameComponents/Board";
  import StraightTetromino from '@/components/tetris/gameComponents/tetrominos/Straight'

  export default {
    name: 'Game',
    props: {
      isPlaying: Boolean,
      isPaused: Boolean
    },
    components: {Board},
    data: function () {
      return{
        tetrominos: [
          StraightTetromino
        ]
      }
    }
  }
</script>

<style scoped>

</style>
