export default function StraightTetromino() {
  this.name = 'Straight';
  this.color = 'blue-green';
  this.currentState = 0;
  this.centerBlock = 2;
  this.isActive = true;
  this.blocks = [
    {
      metricsToCenter: [
        {x: -1, y: 0},
        {x: 0, y: 2},
        {x: 2, y: 0},
        {x: 0, y: -1},
      ]
    },
    {
      metricsToCenter: [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 0},
        {x: 0, y: 0},
      ]
    },
    {
      metricsToCenter: [
        {x: 1, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 1},
      ]
    },
    {
      metricsToCenter: [
        {x: 2, y: 0},
        {x: 0, y: -1},
        {x: -1, y: 0},
        {x: 0, y: 2},
      ]
    },
  ];

  function rotate() {
    if (this.isActive) {
      this.currentState + 1 === 4 ? this.currentState = 0 : this.currentState++
    }
  }

  function getMetricOfBlock(index) {
    return this.blocks[index].metricsToCenter
  }
}
