<template>
  <div>
    <Board ref="board"></Board>
  </div>
</template>

<script>
  import Board from '@/components/tetris/gameComponents/Board'
  import Straight from '@/components/tetris/gameComponents/tetrominos/StraightTetromino'
  import {ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, SPACEBAR} from "@/components/tetris/KeyCodes";
  import ZTetromino from "@/components/tetris/gameComponents/tetrominos/ZTetromino";
  import STetromino from '@/components/tetris/gameComponents/tetrominos/STetromino'
  import SquareTetromino from "@/components/tetris/gameComponents/tetrominos/SquareTetromino";
  import TTetromino from "@/components/tetris/gameComponents/tetrominos/TTetromino";
  import JTetromino from "@/components/tetris/gameComponents/tetrominos/JTetromino";
  import LTetromino from "@/components/tetris/gameComponents/tetrominos/LTetromino";

  export default {
    name: 'Game',
    props: {
      isPlaying: Boolean,
      isPaused: Boolean
    },
    components: {Board},
    data: function () {
      return {
        tetrominos: [new Straight(), new ZTetromino(), new STetromino(), new SquareTetromino(), new TTetromino(), new JTetromino(), new LTetromino()],
        activeTetromino: undefined,
        posX: 0,
        posY: 0,
        score: 0,
        timer: undefined
      }
    },
    methods: {
      drawNewTetromino: function () {
        this.activeTetromino = this.tetrominos[Math.floor(Math.random() * this.tetrominos.length)];
        this.activeTetromino.currentState = 0;
        this.posX = this.activeTetromino.startX;
        this.posY = this.activeTetromino.startY;
        this.updateActiveTetromino()
      },
      updateActiveTetromino: function () {
        for (const block of this.activeTetromino.blocks) {
          let x = block.getMetricByState(this.activeTetromino.currentState).x + this.posX;
          let y = block.getMetricByState(this.activeTetromino.currentState).y + this.posY;
          this.$refs.board.setActive(x, y, this.activeTetromino.color)
        }
      },
      resetActiveTetromino() {
        if (this.activeTetromino) {
          for (const block of this.activeTetromino.blocks) {
            let x = block.getMetricByState(this.activeTetromino.currentState).x + this.posX;
            let y = block.getMetricByState(this.activeTetromino.currentState).y + this.posY;
            this.$refs.board.setInactive(x, y)
          }
        }
      },
      buttonPressed: function (event) {
        let direction;
        switch (event.keyCode) {
          case ARROW_UP:
            this.resetActiveTetromino();
            this.rotate();
            this.correctXRotation();
            this.correctYRotation();
            this.updateActiveTetromino();
            break;
          case ARROW_RIGHT:
            direction = {x: 1, y: 0};
            if (this.directionIsFree(direction.x, direction.y)) {
              this.resetActiveTetromino();
              this.move(direction);
              this.updateActiveTetromino();
            }
            break;
          case ARROW_LEFT:
            direction = {x: -1, y: 0};
            if (this.directionIsFree(direction.x, direction.y)) {
              this.resetActiveTetromino();
              this.move(direction);
              this.updateActiveTetromino();
            }
            break;
          case ARROW_DOWN:
            direction = {x: 0, y: 1};
            if (!this.checkIfTetrminoIsStuck()) {
              this.resetActiveTetromino();
              this.move(direction);
              this.updateActiveTetromino();
            }
            break;
          case SPACEBAR:
            this.drop();
            break;
        }
      },
      move: function (direction) {
        this.posX += direction.x;
        this.posY += direction.y;
      },
      drop: function(){
        while(!this.checkIfTetrminoIsStuck()){
          this.resetActiveTetromino();
          this.move({x:0, y:1});
          this.updateActiveTetromino();
        }
      },
      directionIsFree: function (xDirection, yDirection) {
        let isFree = true;
        for (const block of this.activeTetromino.blocks) {
          if(this.$refs.board !== undefined) {
            if (this.$refs.board.endOfBoardReached(block, this.posX, this.posY, this.activeTetromino.currentState, xDirection, yDirection) || this.$refs.board.nextTileHasBlock(block, this.activeTetromino.currentState, this.posX, this.posY, xDirection, yDirection)) {
              isFree = false;
            }
          } else {
            return this.directionIsFree(xDirection, yDirection)
            break
          }
        }
        return isFree;
      },
      checkIfTetrminoIsStuck: function () {
        if (!this.directionIsFree(0, 1)) {
          this.$refs.board.lockTetromino(this.activeTetromino.blocks, this.posX, this.posY, this.activeTetromino.currentState);
          // TODO change #row to score
          this.score = this.$refs.board.amountOfRowsCleared();
          this.drawNewTetromino();
          return true;
        }
        return false;
      },
      rotate: function () {
        if (this.$refs.board.checkIfRotationIsFree(this.activeTetromino, this.posX, this.posY)) {
          this.activeTetromino.rotate()
        }
      },
      correctXRotation: function () {
        let maxDifference = 0;
        for (const block of this.activeTetromino.blocks) {
          let currentXPos = block.getMetricByState(this.activeTetromino.currentState).x + this.posX;
          if (currentXPos < 1 && maxDifference >= currentXPos) {
            maxDifference = currentXPos - 1
          } else if (currentXPos >= 10 && maxDifference + 10 < currentXPos) {
            maxDifference = currentXPos - 10;
          }
        }
        this.posX = maxDifference < 0 ? this.posX + -maxDifference : this.posX - maxDifference
      },
      correctYRotation: function () {
        let maxDifference = 0;
        for (const block of this.activeTetromino.blocks) {
          let currentYPos = block.getMetricByState(this.activeTetromino.currentState).y + this.posY;
          if (currentYPos < 1 && maxDifference >= currentYPos) {
            maxDifference = currentYPos - 1
          }
        }
        this.posY = this.posY + -maxDifference
      },
      moveDownTicker: function () {
        this.timer = setTimeout(() => {
          if (!this.checkIfTetrminoIsStuck() && this.isPlaying && !this.isPaused) {
            this.resetActiveTetromino();
            this.move({x: 0, y: 1});
            this.updateActiveTetromino();
            window.clearTimeout(this.timer)
            this.timer = undefined
            this.moveDownTicker()
          }
        }, 1000)
      }
    }
    ,
    watch: {
      isPlaying: function (newValue, oldValue) {
        if (newValue && undefined === this.activeTetromino) {
          this.drawNewTetromino()
          this.moveDownTicker()
        }
      },
      isPaused: function (newValue) {
        console.log(newValue)
        if (newValue) {
          window.clearTimeout(this.timer)
          this.timer = undefined
        } else {
          this.moveDownTicker()
        }
      }
    }
    ,
    created: function () {
      window.addEventListener('keydown', this.buttonPressed)
    }
  }
</script>

<style scoped>

</style>
