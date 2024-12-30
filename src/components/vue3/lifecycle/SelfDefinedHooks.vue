<template>
	<div class="inner">
		<h2>自定义Hooks</h2>
		<h4>sum = {{ sum }} <button type="button"
							@click="add">点我sum+1</button></h4>

		<img v-show="dogImageList"
				 v-for="(dogImage, index) in dogImageList"
				 :src="dogImage"
				 :key="index">
		<button @click="fetchDogImage">来一只小狗</button>
	</div>
</template>

<script setup lang="ts" name="SelfDefinedHooks">
import { ref, reactive } from 'vue'
import axios from 'axios'

let sum = ref(0)

function add() {
	sum.value++
}

let dogImageList: Array<string> = reactive([])

async function fetchDogImage() {
	// TODO 拦截器全局统一处理错误
	try {
		let r = await axios.get('https://dog.ceo/api/breeds/image/random')
		// console.log(r)
		// console.log(r.data)
		dogImageList.push(r.data.message)
	} catch (error) {
		alert(error)
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

img {
	height: 175px;
	margin-right: 5px;
}
</style>