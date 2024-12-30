<template>
	<div class="inner">
		<h2>watch测试</h2>
		<h3>监视ref定义的基础数据类型</h3>
		<h4>sum = {{ sum }}</h4>
		<button type="button" @click="add">点我sum+1</button>
	</div>
</template>

<script setup lang="ts" name="Watch1">
import { reactive, ref, watch } from "vue";

let sum = ref(0)

function add() {
	sum.value++
}

watch(sum, (newValue, oldValue) => {
	console.log('sum发生变化了 ', newValue, oldValue)
})
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