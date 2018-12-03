<template>
  <div>
    <div>
      <p>Type in pos X:</p>
      <input v-model="x"/>
    </div>
    <div>
      <p>Type in pos Y:</p>
      <input v-model="y"/>
    </div>
    <div>
      <p>Type in pos current state:</p>
      <input v-model="currentState"/>
    </div>
    <div>
      <button @click="calculateStateId()">CalculateId</button>
    </div>
    <div>
      <h2>Id: {{id}}</h2>
    </div>
    <div>
      <p>Calculate max state ID for Tetris:</p>
      <button @click="calculateFull">Calculate</button>
      <p>{{fullId}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'IdCalculation',
    data: function () {
      return {
        x: 0,
        y: 0,
        currentState: 0,
        id: 0,
        fullId: 0
      }
    },
    methods: {
      calculateStateId: function () {
        let power = 0
        power = Number((Number(this.y * 8) + Number(this.x)))
        this.id = Number(Math.pow(13, power)) * Number(this.currentState)
      },

      calculateFull: function () {
        let id = 0;
        let i = 1;
        let value = 1;
        for (let y = 1; y <= 20; y++) {
          for (let x = 1; x <= 10; x++) {
            id += Number(Math.pow(2, i) * Number(value))
            i++
          }
        }
        this.fullId = id;
      }
    }
  }
</script>

<style scoped>

</style>
