<template>
	<div class="inner">
		<h2>自定义Hooks -- 使用</h2>
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
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

let { dogImageList, fetchDogImage, } = useDog()

let { sum, add } = useSum()
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