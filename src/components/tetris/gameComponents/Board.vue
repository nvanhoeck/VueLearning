<template>
  <div class="dark board-container">
    <div class="row" v-for="y in (1, 20)">
      <BoardBlock :key="x-y" :x="x" :y="y" v-for="x in (1, 10)"/>
    </div>
  </div>
</template>

<script>
  import BoardBlock from "@/components/tetris/gameComponents/BoardBlock";

  export default {
    name: 'Board',
    components: {BoardBlock}
  }
</script>

<style scoped>
  .board-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-left: calc((100vw - 350px - 150px)/2);
    margin-top: calc((100vh - 600px)/2);
    z-index: 5;
    border-radius: 20px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>
