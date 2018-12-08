<template>
  <div class="solo-container white">
    <GameMenu v-show="!playingGame || gamePaused"
              @startGame="playingGame = true"
              @continueGame="gamePaused = false"
              :gamePaused="gamePaused"
    >
    </GameMenu>
    <Game v-bind:isPlaying="playingGame"
          :isPaused="gamePaused"
    ></Game>
  </div>
</template>

<script>
  import Game from '@/components/tetris/gameComponents/Game'
  import GameMenu from "@/components/tetris/gameComponents/GameMenu";
  import {ESC} from '@/components/tetris/KeyCodes'

  export default {
    name: 'Solo',
    components: {GameMenu, Game},
    data: function () {
      return {
        playingGame: false,
        gamePaused: false
      }
    },
    methods: {
      buttonPressed: function (event) {
        if (event.keyCode === ESC) {
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
