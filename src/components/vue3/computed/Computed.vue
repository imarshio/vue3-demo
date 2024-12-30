<template>
	<div class="inner">
		<h2>Computed测试</h2>
		<!-- a的值<input type="text" :value="a"> -->
		a的值<input type="text"
					 v-model="a">
		<button @click="a++">点击+1</button>
		<br />
		b的值<input type="text"
					 v-model="b">
		<button @click="b++">点击+1</button>
		<br />
		a*b = <span> {{ sum }}</span>
	</div>
</template>

<script setup lang="ts" name="Computed">
import { ref, computed } from 'vue'
let a = ref(0)
let b = ref(0)

// 
let sum = computed(() => {
	return a.value * b.value
})
// let sum = 
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