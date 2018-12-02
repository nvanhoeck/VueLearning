export default function StraightTetromino(x, y) {
  this.name = 'Straight';
  this.currentX = x;
  this.currentY = y;
  this.color = 'blue-green';
  this.currentState =0;
  this.centerBlock = 2;
  this.isActive = false;
  this.blocks = [
    {
      metricsToCenter: [
        {x: 0, y: 2},
        {x: 2, y: 0},
        {x: 0, y: -1},
        {x: -1, y: 0},
      ]
    },
    {
      metricsToCenter: [
        {x: 0, y: 1},
        {x: 1, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0}
      ]
    },
    {
      metricsToCenter: [
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 0},
      ]
    },
    {
      metricsToCenter: [
        {x: 0, y: -1},
        {x: -1, y: 0},
        {x: 0, y: 2},
        {x: 2, y: 0}
      ]
    },
  ]
}
