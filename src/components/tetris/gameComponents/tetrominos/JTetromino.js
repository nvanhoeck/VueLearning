export default function JTetromino() {
  this.name = 'J';
  this.color = 'orange';
  this.currentState = 0;
  this.isActive = true;
  this.startX = 5;
  this.startY = 2;
  this.blocks = [
    {
      metricsToCenter: [
        {x: -1, y: -1},
        {x: 1, y: -1},
        {x: 1, y: 1},
        {x: -1, y: 1},
      ],
      getMetricByState: function (currentState) {
        return this.metricsToCenter[currentState]
      }
    },
    {
      metricsToCenter: [
        {x: -1, y: 0},
        {x: 0, y: -1},
        {x: 1, y: 0},
        {x: 0, y: 1},
      ],
      getMetricByState: function (currentState) {
        return this.metricsToCenter[currentState]
      }
    },
    {
      metricsToCenter: [
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
      ],
      getMetricByState: function (currentState) {
        return this.metricsToCenter[currentState]
      }
    },
    {
      metricsToCenter: [
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x: -1, y: 0},
        {x: 0, y: -1},
      ],
      getMetricByState: function (currentState) {
        return this.metricsToCenter[currentState]
      }
    },
  ];

  this.rotate = function () {
    if (this.isActive) {
      this.currentState === 3 ? this.currentState = 0 : this.currentState++
    }
  };
  this.getNextState = function () {
    return this.currentState === 3 ? 0 : this.currentState + 1
  }
}
