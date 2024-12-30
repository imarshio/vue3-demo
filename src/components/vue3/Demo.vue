<template>
  <div class="inner">
    <h2>Vue 3.x 演示</h2>
    current sum is {{ sum }}
    <br />
    <button @click="add()">click sum +1</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Demo3',
  setup() {

    let sum = ref(0)

    function add() {
      // 注意在vue3中不能使用this，vue3已经开始弱化this了
      sum.value += 1
    }

    // 将数据暴露出去
    return { sum, add }
  }
}
</script>

<style scoped>
.inner {
  background-color: #aaa;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
}
</style>
