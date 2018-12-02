<template>
  <div class="solo-container white">
    <GameMenu></GameMenu>
    <Game></Game>
  </div>
</template>

<script>
  import Game from '@/components/tetris/gameComponents/Game'
  import GameMenu from "@/components/tetris/gameComponents/GameMenu";

  export default {
    name: 'Solo',
    components: {GameMenu, Game}
  }
</script>

<style scoped>
  .solo-container{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    max-height: 100vh;
    max-width: 100vw;
    min-height: 300px;
    min-width: 300px;
  }
</style>
