<template>
  <div class="solo-container white">
    <GameMenu v-show="gameEnded || gamePaused"
              @startGame="gameEnded = $event"
              @continueGame="gamePaused = $event"
              :gamePaused="gamePaused"
    >
    </GameMenu>
    <Game></Game>
  </div>
</template>

<script>
  import Game from '@/components/tetris/gameComponents/Game'
  import GameMenu from "@/components/tetris/gameComponents/GameMenu";

  export default {
    name: 'Solo',
    components: {GameMenu, Game},
    data: function () {
      return {
        gameEnded: true,
        gamePaused: false
      }
    },
    methods: {
      buttonPressed: function (event) {
        if (event.keyCode === 27) {
          this.gamePaused = true
        }
      }
    },
    created: function () {
      window.addEventListener('keyup', this.buttonPressed)
    }
  }
</script>

<style scoped>
  .solo-container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    max-height: 100vh;
    max-width: 100vw;
    min-height: 300px;
    min-width: 300px;
  }
</style>
