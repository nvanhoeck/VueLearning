<template>
  <div>
    <Board ref="board"></Board>
  </div>
</template>

<script>
  import Board from '@/components/tetris/gameComponents/Board'
  import Straight from '@/components/tetris/gameComponents/tetrominos/StraightTetromino'
  import {ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP} from "@/components/tetris/KeyCodes";

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
        this.updateActiveTetromino()
      },
      updateActiveTetromino: function () {
        for (const block of this.activeTetromino.blocks) {
          let x = block.metricsToCenter[this.activeTetromino.currentState].x + this.posX
          let y = block.metricsToCenter[this.activeTetromino.currentState].y + this.posY
          this.$refs.board.setActive(x, y, this.activeTetromino.color)
        }
      },
      resetActiveTetromino() {
        if (this.activeTetromino) {
          for (const block of this.activeTetromino.blocks) {
            let x = block.metricsToCenter[this.activeTetromino.currentState].x + this.posX
            let y = block.metricsToCenter[this.activeTetromino.currentState].y + this.posY
            this.$refs.board.setInactive(x, y)
          }
        }
      },
      buttonPressed: function (event) {
        switch (event.keyCode) {
          case ARROW_UP:
            this.resetActiveTetromino();
            this.rotate();
            this.updateActiveTetromino();
            break;
          case ARROW_RIGHT:
            this.resetActiveTetromino();
            this.move({x: 1, y: 0});
            this.updateActiveTetromino();
            break;
          case ARROW_LEFT:
            this.resetActiveTetromino();
            this.move({x: -1, y: 0});
            this.updateActiveTetromino();
            break;
          case ARROW_DOWN:
            if (this.downIsFree()) {
              this.resetActiveTetromino();
              this.move({x: 0, y: 1});
              this.updateActiveTetromino();
            }
            break;
          case SPACES:
            this.resetActiveTetromino();
            this.moveDown();
            this.updateActiveTetromino();
            break;
        }
        this.checkIfTetrminoIsStuck();
      },
      move: function (direction) {
        this.posX += direction.x;
        this.posY += direction.y;
      },
      downIsFree: function () {
        let isFree = true;
        for (const block of this.activeTetromino.blocks) {
          if (this.endOfBoardReached(block) || this.nextTileHasBlock(block)) {
            isFree = false;
          }
        }
        return isFree;
      },
      endOfBoardReached: function (block) {
        console.log(block.metricsToCenter[this.activeTetromino.currentState].y)
        console.log(Number(this.posY) + 1 );
        return block.metricsToCenter[this.activeTetromino.currentState].y + this.posY + 1 > 20;
      },
      nextTileHasBlock: function (block) {
        const tile = this.$refs.board.getBoardTile(block.metricsToCenter[this.activeTetromino.currentState].x + this.posX, block.metricsToCenter[this.activeTetromino.currentState].y + this.posY + 1)
        return tile !== undefined ? tile.isFilled : false
      },
      checkIfTetrminoIsStuck: function () {
        console.log('check stuck');
        if (!this.downIsFree()) {
          console.log('Isnt Free');
          this.$refs.board.lockTetromino(this.activeTetromino.blocks, this.posX, this.posY, this.activeTetromino.currentState)
          this.drawNewTetromino()
        }
      }
    },
    watch: {
      isPlaying: function (newValue, oldValue) {
        if (newValue && undefined === this.activeTetromino) {
          this.drawNewTetromino()
        }
      }
    },
    created: function () {
      window.addEventListener('keydown', this.buttonPressed)
    }
  }
</script>

<style scoped>

</style>
