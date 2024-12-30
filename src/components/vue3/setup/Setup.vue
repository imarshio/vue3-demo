<template>
	<div class="inner">
		<h2>Vue 3.x setup演示</h2>
		current sum is {{ sum }}
		<br />
		<button @click="add()">click sum +1</button>
	</div>
</template>

<script setup lang="ts" name="Setup">
import { ref } from 'vue'
let sum = ref(0)

function add() {
	// 注意在vue3中不能使用this，vue3已经开始弱化this了
	sum.value += 1
	console.log(sum)
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
