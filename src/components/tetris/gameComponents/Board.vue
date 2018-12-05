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
    components: {BoardBlock},
    methods: {
      setActive: function (x, y, color) {
        let tile = this.$children.find(block => block.x === x && block.y === y);
        tile.changeActivation(true);
        tile.tileColor = color
      },
      setInactive: function (x, y) {
        let tile = this.$children.find(block => block.x === x && block.y === y);
        tile.changeActivation(false);
      },
      getBoardTile: function (x, y) {
        return this.$children.find(block => block.x === x && block.y === y);
      },
      lockTetromino: function (blocks, posX, posY, activeState) {
        for (const block of blocks) {
          let tile = this.$children.find(b => b.x === block.metricsToCenter[activeState].x + posX && b.y === block.metricsToCenter[activeState].y + posY)
          tile.changeFilled(true)
        }
      },
      nextTileHasBlock: function (block, currentState, posX, posY, xDirection, yDirection) {
        const tile = this.getBoardTile(block.getMetricByState(currentState).x + posX + xDirection, block.getMetricByState(currentState).y + posY + +yDirection)
        return tile !== undefined ? tile.isFilled : false
      },
      endOfBoardReached: function (block, posX, posY, currentState, xDirection, yDirection) {
        return block.getMetricByState(currentState).y + posY + yDirection > 20 || block.getMetricByState(currentState).x + posX + xDirection > 10 || block.getMetricByState(currentState).x + posX + xDirection === 0;
      },
      checkIfRotationIsFree: function (tetromino, posX, posY) {
        let isFree = true
        for (const block of tetromino.blocks) {
          isFree = this.calculateFreePathInRotation(block, posX, posY, tetromino.currentState, tetromino.getNextState())
        }
        return isFree
      },
      calculateFreePathInRotation(block, posX, posY, currentState, nextState) {
        let yDif = block.getMetricByState(currentState).y + block.getMetricByState(nextState).y
        let xDif = block.getMetricByState(currentState).x + block.getMetricByState(nextState).x
        let yCount = 0
        for (let xCount = 0; xDif > 0 ? xCount < xDif : xCount > xDif; xDif > 0 ? xCount++ : xCount--) {
          if (xCount !== 0) {
            if (this.nextTileHasBlock(block, currentState, posX, posY, xCount, yDif)) {
              return false
            }
            yDif > 0 ? yCount++ : yCount--
          }
        }
        return true;
      }
    }
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
    margin-left: calc((100vw - 350px - 150px) / 2);
    margin-top: calc((100vh - 600px) / 2);
    z-index: 5;
    border-radius: 20px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>
