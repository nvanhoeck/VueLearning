<template>
  <div class="menu-container">
    <h1 class="title">Tetris - The AI</h1>
    <div class="buttons-container">
      <button v-for="(action) in actions"
              class="button large button-font"
              :class="action.color"
              @click="goToRoute(action.link)"
      >
        {{action.name}}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainMenu',
    data: function () {
      return{
        actions: [
          {name:'Solo Play', color: 'red', link:'solo'},
          {name: 'AI Training', color: 'blue', link:'train'},
          {name: 'Player vs AI', color: 'purple', link:'battle'}
        ],
        currentRoute: window.location.pathname
      }
    },
    methods: {
      goToRoute: function (route) {
        this.$router.push(this.currentRoute + 'tetris/' + route);
      }
    }
  }
</script>

<style scoped>
  .menu-container {
    width: 400px;
    height: 500px;
    border-radius: 25px;
    margin-top: calc((100vh - 500px)/2) ;
    margin-left: calc((100vw - 400px)/2);
    /*background-color: #354a5f;
    border: solid 5px #2d3e52;*/
  }
  .buttons-container{
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
