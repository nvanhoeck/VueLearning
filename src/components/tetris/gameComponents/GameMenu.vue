<template>
  <div class="game-menu blue">
    <div class="title-group">
      <h1 class="game-menu-title">Ready to play?</h1>
      <h2 class="game-menu-subtitle">There is no AI involved here!</h2>
    </div>
    <div class="buttons-group">
      <button @click="startGame()" class="button medium green button-font play-button">Start</button>
      <button @click="goBack()" class="button medium red button-font play-button">Back</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameMenu',
    data: function () {
      return {
        currentRoute: window.location.pathname
      }
    },
    methods: {
      startGame: function () {
        // TODO
      },
      goBack: function () {
        this.$router.push(this.currentRoute + 'tetris/menu')
      }
    }
  }
</script>

<style scoped>
  .game-menu {
    width: 350px;
    height: 250px;
    border-radius: 25px;
    border: solid 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-left: calc((100vw - 350px) / 2);
    margin-top: calc((100vh - 250px) / 2);
  }

  .title-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
    margin: 0;
  }
  h1, h2 {
    margin: 5px;
  }
  .buttons-group {
    margin-top: 10%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .game-menu-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color: whitesmoke;
  }

  .game-menu-subtitle {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: whitesmoke;
    margin-top: 25px;
  }

  .play-button {
    margin: 10px;
  }
</style>
